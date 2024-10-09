import withPWAInit from "next-pwa";

// 判断环境
const isProd = ["production"].includes(process.env.NODE_ENV);

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  disable: !isProd,
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ["app-build-manifest.json"],
});
const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve("next-pwa");
  const packageDirectory = path.dirname(packagePath);
  const registerJs = path.join(packageDirectory, "register.js");

  return entry().then((entries) => {
    // Register SW on App directory, solution: https://github.com/shadowwalker/next-pwa/pull/427
    if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
      if (Array.isArray(entries["main-app"])) {
        entries["main-app"].unshift(registerJs);
      } else if (typeof entries["main-app"] === "string") {
        entries["main-app"] = [registerJs, entries["main-app"]];
      }
    }
    return entries;
  });
};
// 转发
const rewrites = () => {
  if (!isProd) {
    return [
      {
        source: "/api/:slug*",
        destination: process.env.NEXT_PUBLIC_BASEURL,
      },
    ];
  } else {
    return [];
  }
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // rewrites,
  // 禁用Nginx 缓存以启动流式传输
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        // 千千音乐图片资源地址
        protocol: "https",
        hostname: "img01.dmhmusic.com",
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    // register pwa
    const entry = generateAppDirEntry(config.entry);
    config.entry = () => entry;

    return config;
  },
};

export default withPWA(nextConfig);

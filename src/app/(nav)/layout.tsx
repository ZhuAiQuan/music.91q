import React from "react";

import Header from "./_components/header";
import NavList from "./_components/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const nav = [
    {
      path: "/",
      title: "首页",
      prefetch: true,
    },
    {
      path: "/songlist",
      title: "歌单",
    },
    {
      path: "/artist",
      title: "歌手",
    },
    {
      path: "/vip",
      title: "VIP",
    },
    {
      path: "/play",
      title: "音乐盒",
    },
    {
      path: "/download",
      title: "客户端",
      prefetch: true,
    },
    {
      path: "/release",
      title: "音乐人入驻",
      prefetch: true,
    },
  ];
  return (
    <>
      <Header nav={<NavList list={nav} />} more={<></>}></Header>
      <div className="container">{children}</div>
    </>
  );
}

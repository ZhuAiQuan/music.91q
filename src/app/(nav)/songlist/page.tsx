import React from "react";
import Link from 'next/link';
import Category, { type CategoryList } from "./_components/category";

import style from "./index.module.scss";

export default async function Index({ searchParams }: { searchParams: { subCateId?: `${number}` } }) {
  const { data } = (await fetch("https://91qmusic.vercel.app/songlist/category").then((res) => res.json())) as {
    data: CategoryList[];
  };
  const title = data.map(item => item.subCate).flat().find((item) => +item.id === Number(searchParams.subCateId))?.categoryName || "全部歌单";

  return (
    <div className={style.container}>
      <div className={style.category}>
        {data.map((item, i) => (
          <Category key={item.id} {...item} colNum={!i ? 2 : 3} />
        ))}
      </div>
      <p className={style.title}>{title}
        {title !== '全部歌单' && <Link href="/songlist" replace><span className={`iconfont icon-Close ${style.clear}`}></span></Link>}
      </p>
    </div>
  );
}

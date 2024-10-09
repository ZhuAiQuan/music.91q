"use client";
import React, { useMemo, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import style from "./index.module.scss";

interface Props extends CategoryList {
  /**
   * 允许列数
   */
  colNum?: number;
}
export interface CategoryList {
  categoryName: string;
  id: `${number}`;
  subCate: SubCate[];
}
interface SubCate {
  id: `${number}`;
  categoryName: string;
  count: number;
}
export default function Index({ categoryName, subCate, colNum = 3 }: Props) {
  const $query = useSearchParams();
  const [list, extra] = useMemo(() => {
    const temp = [] as SubCate[][];
    const extra = [] as SubCate[];
    if (Array.isArray(subCate) && subCate.length) {
      const len = Math.ceil(subCate.length / colNum);
      for (let i = 0; i < len; i++) {
        temp.push(subCate.slice(i * colNum, (i + 1) * colNum));
      }
    }
    const show = temp.slice(0, 3);
    extra.push(...temp.slice(3).flat());
    let rest: SubCate | undefined;
    if (show.at(-1)?.length === colNum) {
      rest = show[2].splice(colNum - 1, 1)[0];
    }
    // rest = show.at(-1)?.length === colNum ? show.at(-1)?.at(-1) : undefined;
    if (rest) {
      extra.unshift(rest);
    }
    return [show, extra];
  }, [colNum, subCate]);
  const [expand, setExpand] = useState(false);
  const more = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (expand) {
        gsap.fromTo(
          more.current,
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            opacity: 1,
            yPercent: 0,
            zIndex: 10,
            duration: 0.35,
          }
        );
      }
    },
    {
      dependencies: [expand],
      revertOnUpdate: true,
    }
  );
  return (
    <div className={style.container}>
      <div className={style.title}>{categoryName}</div>
      <div className={style.list}>
        {list.map((item, i) => (
          <div key={i} className={style.row}>
            {item.map((row) => (
              <Link
                key={row.id}
                href={`?subCateId=${row.id}`}
                replace
                prefetch={false}
                className={`${style.tag} ${row.id === $query.get("subCateId") ? style.active : ""}`}
              >
                {row.categoryName}
              </Link>
            ))}
            {/* 最后一行且有剩余为展示的tag数量且最后一行的数量小于列数 */}
            {i === list.length - 1 && extra.length && item.length !== colNum ? (
              <div
                className={`${style.tag} ${style.more} ${expand ? style.expand : ""}`}
                onClick={() => setExpand(!expand)}
              >
                更多
                <span className={`iconfont icon-arrow-copy ${style.arrow}`}></span>
                <div className={style["expand-list"]} ref={more}>
                  {extra.map((row) => (
                    <Link
                      key={row.id}
                      href={`?subCateId=${row.id}`}
                      replace
                      prefetch={false}
                      className={`${style.tag} ${row.id === $query.get("subCateId") ? style.active : ""}`}
                    >
                      {row.categoryName}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

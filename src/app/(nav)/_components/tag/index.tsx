"use client";
import React from "react";

import Link from "next/link";
import styled from "styled-components";

export interface Tag {
  title: string;
  href: string;
}
export default function Index({ list, className = '' }: { list: Tag[]; className?: string }) {
  return (
    <Widget className={className}>
      <div className="category">
        {list.map((item, i) => (
          <Link key={i} href={item.href} prefetch={false}>
            {item.title}
          </Link>
        ))}
      </div>
      <Link href="/songlist" prefetch={false}>
        更多
      </Link>
    </Widget>
  );
}

const Widget = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .category {
    display: flex;
    align-items: center;
    column-gap: 10px;

    a {
      padding: 0 30px;
      line-height: 40px;
      border-radius: 40px;
      background-color: #000;
    }
  }
`;

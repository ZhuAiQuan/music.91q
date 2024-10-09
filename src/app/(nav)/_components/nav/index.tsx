"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import styled from "styled-components";

interface INav {
  path: string;
  title: string;
  prefetch?: boolean;
}
export default function Index({ list }: { list: INav[] }) {
  const $path = usePathname();

  return (
    <Widget>
      {list.map((item, i) => (
        <Link href={item.path} key={i} prefetch={item.prefetch || false} className={$path === item.path ? 'active' : ''}>
          {item.title}
        </Link>
      ))}
    </Widget>
  );
}

const Widget = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 26px;
  height: 100%;
  a {
    height: 100%;
    font-size: 16px;
    display: grid;
    place-items: center;
    &.active {
      position: relative;
      color: var(--link-active-color);
      font-weight: 600;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--link-active-color);
      }
    }
    &:hover {
      color: var(--link-hover-color);
    }
  }
`;

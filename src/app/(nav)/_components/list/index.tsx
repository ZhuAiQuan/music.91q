"use client";
export { default as Video } from './video';

import React from "react";

import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  href: string;
  children: React.ReactNode;
}
export default function Index({ title, href, children }: Props) {
  return (
    <Widget>
      <div className="head">
        {title}
        <Link href={href} prefetch={false}>更多</Link>
      </div>
      {children}
    </Widget>
  );
}

const Widget = styled.div`
  user-select: none;
  margin: 30px auto;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f8f8f8;
    font-size: 28px;
    line-height: 1;
    margin-bottom: 30px;
    a {
      font-size: 14px;
    }
  }
`;

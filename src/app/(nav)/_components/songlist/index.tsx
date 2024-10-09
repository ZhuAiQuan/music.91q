"use client";
export { default as ShowDiscover } from './show';
export { default as NewSongRecommet } from './new';

import React from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface SongList {
  title: string;
  desc: string;
  isFavorite: 0 | 1;
  recommendSort: number;
  type: number;
  baseId: number;
  tagList: string[];
  pic: string;
  id: number;
  addDate: string;
}
export default function Index({ id, pic, title }: SongList) {
  return (
    <Widget prefetch={false} href={`/songlist/${id}`}>
      <div className="cover">
        <Image src={pic} alt="cover" width={224} height={224} />
        <div className="mask">
          {/* 预留的播放图标 */}
        </div>
      </div>
      <p className="title">{title}</p>
    </Widget>
  );
}

const Widget = styled(Link)`
  width: 224px;
  font-size: 16px;
  color: var(--title-color);
  &:hover {
    color: unset;
  }
  .cover {
    width: 224px;
    height: 224px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: fit-content;
      transition: all 0.3s ease-in 0.1s;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000000CC;
      pointer-events: none;
      opacity: 0;
      transition: all .3s ease-in;
    }
    &:hover {
      img {
        transform: scale(1.1);
        cursor: pointer;
        transition: all 0.5s ease;
      }
      .mask {
        opacity: 1;
        transition: all .4s ease;
      }
    }
  }
  .title {
    line-height: 26px;
    margin-top: 18px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

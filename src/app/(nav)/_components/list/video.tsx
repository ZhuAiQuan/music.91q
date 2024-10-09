"use client";
import React from "react";

import Image from "next/image";
import styled from "styled-components";

interface VideoInfo {
  pic: string;
  artist: string;
  title: string;
}
export default function Index({ pic, artist, title }: VideoInfo) {
  return (
    <Widget>
      <div className="cover">
        <Image src={pic} alt="cover" className="video-cover" width={285} height={160} />
        <div className="mask"></div>
      </div>
      <p className="video-title">{title}</p>
      <p className="artist-name">{artist}</p>
    </Widget>
  );
}

const Widget = styled.div`
  width: 285px;
  .cover {
    width: 285px;
    height: 160px;
    position: relative;
    overflow: hidden;
    img {
      width: 285px;
      height: fit-content;
      transition: all .3s ease-in;
    }
    .mask {
      position: absolute;
      top: 50%;
      left: 50%;
      background: #ffffffbe;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      backdrop-filter: blur(1px);
      transition: all .3s ease-in;
    }
    &:hover {
      cursor: pointer;
      img {
        transform: scale(1.1);
        transition: all 0.5s ease;
      }
      .mask {
        opacity: 1;
        transform: all 0.4s ease;
      }
    }
  }
  .video-title {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
    margin-top: 18px;
  }
  .artist-name {
    color: var(--link-color);
    margin: 0;
  }
`;

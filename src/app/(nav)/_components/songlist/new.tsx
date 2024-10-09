"use client";
import React from "react";

import Link from "next/link";
import styled from "styled-components";

import Cover from "./cover";

interface Album {
  title: string;
  artist: string;
  pic: string;
}
export default function Index({ pic, title, artist }: Album) {
  return (
    <Widget>
      <Link href={""} prefetch={false} className="album">
        <Cover pic={pic} className="cover" />
      </Link>
      <div className="info">
        <p className="song-title">
          <Link href={``} prefetch={false}>
            {title}
          </Link>
        </p>
        <p className="artist">
          <Link href={``} prefetch={false}>
            {artist}
          </Link>
        </p>
      </div>
    </Widget>
  );
}

const Widget = styled.div`
  display: flex;
  align-items: center;
  width: 386.66px;
  height: 120px;
  background-color: #000;
  column-gap: 40px;
  .album {
    width: 120px;
    display: inline-block;
    .cover {
      width: 120px;
      height: 120px;
    }
  }
  .info {
    .song-title {
      a {
        font-size: 16px;
        line-height: 21px;
        color: var(--title-color);

      }
    }
    .artist {
      a {
        font-size: 14px;
        color: var(--link-color);
        &:hover {
          color: unset;
        }
      }
    }
  }
`;

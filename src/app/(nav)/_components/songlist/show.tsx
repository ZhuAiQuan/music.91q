"use client";
import React, { useMemo } from "react";

import Link from "next/link";
import styled from "styled-components";

import Cover from "./cover";

interface ShowInfo {
  pic: string;
  title: string;
  artist: string;
  releaseDate: string;
  cpId: number;
}
export default function Index({ cpId, pic, title, artist, releaseDate }: ShowInfo) {
  const date = useMemo(() => {
    return new Date(releaseDate).toLocaleDateString().replaceAll("/", "-");
  }, [releaseDate]);
  return (
    <Widget href={``} prefetch={false}>
      <Cover pic={pic} className="show" />
      <p className="title">{title}</p>
      <p className="artist">{artist}</p>
      <p className="artist">发行时间: {date}</p>
    </Widget>
  );
}

const Widget = styled(Link)`
  width: 216px;
  color: var(--link-color);
  font-size: 14px;
  display: inline-block;
  &:hover {
    color: unset;
  }
  .show {
    width: 192px;
    height: 192px;
  }
  .title {
    font-size: 16px;
    color: var(--title-color);
    margin-top: 18px;
    margin-bottom: unset;
  }
  .artist {
    margin-top: 6px;
    margin-bottom: unset;
  }
`;

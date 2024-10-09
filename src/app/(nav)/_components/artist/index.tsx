"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Index({ pic, name, artistCode }: { pic: string; name?: string; artistCode: string }) {
  return (
    <Widget href={`/artist/${artistCode}`} prefetch={false}>
      <div className="avatar">
        <Image src={pic} alt="artist" width={175} height={175} />
      </div>
      {name && <p className="artist-name">{name}</p>}
    </Widget>
  );
}

const Widget = styled(Link)`
  width: 175px;
  color: var(--title-color);
  &:hover {
    color: unset;
  }
  .avatar {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: fit-content;
      transition: all .3s ease .3s;
      &:hover {
        transform: scale(1.1);
        transition: all .5s ease;
      }
    }
  }
  .artist-name {
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    margin-top: 18px;
  }
`;

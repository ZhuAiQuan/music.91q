"use client";
import React from "react";

import Image from "next/image";
import styled from "styled-components";

import _disk from "@/assets/images/disk.png";

export default function Index({ pic, className = '' }: { pic: string; className?: string; }) {
  return (
    <Widget className={className}>
      <Image src={pic} alt="cover" width={200} height={200} className="cover" />
      <Image src={_disk} alt="disk" className="disk" />
    </Widget>
  );
}

const Widget = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  .cover {
    position: inherit;
    z-index: 5;
    width: 100%;
    height: fit-content;
  }
  .disk {
    position: absolute;
    right: -15%;
    top: 4%;
    z-index: 1;
    width: 92%;
    height: fit-content;
    animation: rotate360 1s linear .3s infinite;
    animation-play-state: paused;
    transition: all .3s ease .1s;
  }
  &:hover {
    cursor: pointer;
    .disk {
      right: -20%;
      animation-play-state: running;
    }
  }
  @keyframes rotate360 {
    100% {
      transform: rotate(180deg);
    }
  }
`;

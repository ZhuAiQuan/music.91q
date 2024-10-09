"use client";
import React from "react";

import styled from "styled-components";

import ArrowLeft from "@/assets/svg/arrow_left.svg";
import ArrowRight from "@/assets/svg/arrow_right.svg";

export default function Index({ children, className = '' }: { children: React.ReactNode; className?: string; }) {
  return (
    <Widget>
      <div className="prev">
        <ArrowLeft />
      </div>
      <div className={`context ${className}`}>{children}</div>
      <div className="next">
        <ArrowRight />
      </div>
    </Widget>
  );
}

const Widget = styled.div`
  width: 100%;
  min-height: 100px;
  position: relative;
  .context {
    display: flex;
    width: 100%;
    overflow-x: hidden;
  }
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgb(75, 75, 75);
    color: rgb(31, 31, 31);
    display: grid;
    place-items: center;
    opacity: 0;
    transition: all 0.3s ease;
    svg {
      width: 30px;
      height: auto;
    }
    &:hover {
      cursor: pointer;
      background-color: #ffffff80;
      transition: all .3s ease;
    }
  }
  .prev {
    left: -80px;
  }
  .next {
    right: -80px;
  }
  &:hover {
    .prev,
    .next {
      cursor: pointer;
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
`;

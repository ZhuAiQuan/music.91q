"use client";
import React from "react";

import Image from "next/image";
import styled from "styled-components";

export default function Index({ nav, more }: { nav: React.ReactNode; more: React.ReactNode }) {
  return (
    <Widget>
      <div className="left-context">
        <Image src="/logo.png" alt="website logo" width={120} height={41.3} />
        {nav}
      </div>
      {more}
    </Widget>
  );
}

const Widget = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-context {
    display: flex;
    align-items: center;
    column-gap: 40px;
    height: 100%;
    img {
      width: 120px;
      height: fit-content;
    }
  }
`;

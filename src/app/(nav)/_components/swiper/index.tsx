"use client";
import React from "react";

import styled from "styled-components";

interface ISwipterAssets {
  /**
   * 图片地址 列如:https://img01.dmhmusic.com/0513/M00/3D/4F/ChAKFGaWShqAUVNsAACJ3v0SF1U427.jpg
   */
  pic: string;
  /**
   * 标题
   */
  title: string;
  scenesName: string;
  /**
   * 排序
   */
  sort: `${number}`;
  /**
   * 展示开始的时间
   */
  showStartDate: string;
  /**
   * 展示结束的时间
   */
  showEndDate: string;
  /**
   * 对应Id
   */
  jumpLinkOutput: string;
  jumpType: `${number}`;
  scenesCode: "banner";
}
export default function Index() {

  return (
    <Widget>
      <div className="swiper-context">
        
      </div>
    </Widget>
  );
}

const Widget = styled.div`
  padding: 30px 0;
  width: 100%;
  height: 300px;
  overflow: hidden;
  .swiper-context {
    display: flex;
    width: max-content;
  }
`;

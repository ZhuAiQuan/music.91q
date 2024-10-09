import React from "react";

import ArtishCover from "./_components/artist";
import List, { Video } from "./_components/list";
import Loop from "./_components/loop";
import SongList, { ShowDiscover, NewSongRecommet } from "./_components/songlist";
import Swiper from "./_components/swiper";
import TagList, { Tag } from "./_components/tag";
import style from "./home.module.scss";

export default function Index() {
  const categoryTag: Tag[] = [
    {
      href: "",
      title: "流行",
    },
    {
      href: "",
      title: "摇滚",
    },
    {
      href: "",
      title: "民谣",
    },
    {
      href: "",
      title: "电子",
    },
    {
      href: "",
      title: "影视原声",
    },
    {
      href: "",
      title: "ACG",
    },
    {
      href: "",
      title: "新世纪",
    },
    {
      href: "",
      title: "爵士",
    },
    {
      href: "",
      title: "古典",
    },
    {
      href: "",
      title: "乡村",
    },
    {
      href: "",
      title: "说唱",
    },
  ];
  const temp = [
    {
      artistCode: "A10048883",
      pic: "https://img01.dmhmusic.com/0206/M00/70/E2/ChR47FtM6_qAYdtpAAJgVE2U6UI268.jpg",
      name: "许嵩",
    },
    {
      artistCode: "A10893323",
      pic: "https://img01.dmhmusic.com/0513/M00/85/54/ChAKCGP9sTyAZ-HBABjeUlVyjsI939.jpg",
      name: "告五人",
    },
  ];
  const tempSongList = [
    {
      title: "Ice Paper歌单精选 | 中间人",
      id: 295991,
      pic: "https://img01.dmhmusic.com/0513/M00/F8/DE/ChAKCGVVryeATtvaAAEqJQD5FHE766.jpg",
    },
    {
      title: "厂牌精选 | 少年红星",
      id: 295300,
      pic: "https://img01.dmhmusic.com/0513/M00/BD/91/ChAKCGVUL5eAGuuKAAMBtMguBzU573.jpg",
    },
    {
      title: "厂牌精选 | 海蝶音乐",
      id: 295983,
      pic: "https://img01.dmhmusic.com/0513/M00/9A/4F/ChAKCGVTF1OAYVyYAAGuvIzxUKM364.jpg",
    },
    {
      title: "厂牌精选 | 太合麦田",
      id: 295984,
      pic: "https://img01.dmhmusic.com/0513/M00/9A/48/ChAKCGVTFxmAE1UMAAEuQ6KEhgM413.jpg",
    },
    {
      title: "厂牌精选 | 独联体IndieWorks",
      id: 295985,
      pic: "https://img01.dmhmusic.com/0513/M00/9A/3C/ChAKCGVTFr-APgNSAAIYtF5bHNU276.jpg",
    },
    {
      title: "校园 | 用音乐的方式打开青春回忆",
      id: 295896,
      pic: "https://img01.dmhmusic.com/0513/M00/1D/6C/ChAKFGR9tGiAaW4jAACeSiU_CS0908.jpg",
    },
  ];
  const list = [
    {
      title: "秀动发行",
      href: "",
      children: (
        <Loop className={style['cl-30']}>
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
          <ShowDiscover
            title="123"
            artist="abc"
            releaseDate="2024-06-22T00:00:00.000Z"
            pic="https://img01.dmhmusic.com/0513/M00/F2/58/ChAKFGZxln-AL2liAAV-Wk5Xpqc258.jpg"
          />
        </Loop>
      ),
    },
    {
      title: "热门歌单",
      href: "/songlist",
      children: (
        <div className={style["songlist-container"]}>
          <div className={style["songlist-context"]}>
            {tempSongList.map((item) => (
              <SongList key={item.id} {...item} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "新歌推荐",
      href: "",
      children: (
        <div className={style["new-song-recomment"]}>
          <NewSongRecommet
            title="奉陪（《少年白马醉春风2》动画片头曲）"
            pic="https://img01.dmhmusic.com/0513/M00/33/DF/ChAKFGaUxciAEdbfAAwQTjDvG7k453.jpg"
            artist="池约翰C.J"
          />
          <NewSongRecommet
            title="奉陪（《少年白马醉春风2》动画片头曲）"
            pic="https://img01.dmhmusic.com/0513/M00/33/DF/ChAKFGaUxciAEdbfAAwQTjDvG7k453.jpg"
            artist="池约翰C.J"
          />
          <NewSongRecommet
            title="奉陪（《少年白马醉春风2》动画片头曲）"
            pic="https://img01.dmhmusic.com/0513/M00/33/DF/ChAKFGaUxciAEdbfAAwQTjDvG7k453.jpg"
            artist="池约翰C.J"
          />
          <NewSongRecommet
            title="奉陪（《少年白马醉春风2》动画片头曲）"
            pic="https://img01.dmhmusic.com/0513/M00/33/DF/ChAKFGaUxciAEdbfAAwQTjDvG7k453.jpg"
            artist="池约翰C.J"
          />
          <NewSongRecommet
            title="奉陪（《少年白马醉春风2》动画片头曲）"
            pic="https://img01.dmhmusic.com/0513/M00/33/DF/ChAKFGaUxciAEdbfAAwQTjDvG7k453.jpg"
            artist="池约翰C.J"
          />
          <NewSongRecommet
            title="奉陪（《少年白马醉春风2》动画片头曲）"
            pic="https://img01.dmhmusic.com/0513/M00/33/DF/ChAKFGaUxciAEdbfAAwQTjDvG7k453.jpg"
            artist="池约翰C.J"
          />
        </div>
      ),
    },
    {
      title: "热门歌手",
      href: "/artist",
      children: (
        <div className={style["artist-container"]}>
          {temp.map((item) => (
            <ArtishCover key={item.name} {...item} />
          ))}
        </div>
      ),
    },
    {
      title: "精选视频",
      href: "",
      children: (
        <>
          <Video
            pic="https://img01.dmhmusic.com/0513/M00/03/E9/ChAKFGZ6n6OAYY-1ABEN6miBrnM990.jpg"
            title="青春摇滚诗"
            artist="苏勋伦"
          />
        </>
      ),
    },
  ];
  return (
    <div className={style.container}>
      <Swiper />
      <TagList list={categoryTag} className={style.navlist} />
      {list.map((item) => (
        <List key={item.title} {...item}>
          {item.children}
        </List>
      ))}
    </div>
  );
}

import { UESR_HIGH, UESR_WIDTH } from "../../../../global/var";
import "./Content.css";
import img1 from "./fan.jpg";
import img2 from "./sublogo.png";
import img3 from "./phonepage.jpg";
import img4 from "./mainlogo.png";
import folder from "../../components/content/folder.png";
import { useEffect, useRef, useState } from "react";

const Content = () => {
  const LEVEL = 300;
  const DISAPPEAR_FIRST = 1;
  const DISAPPEAR_DISTANCE = 1.5;
  const DISAPPEAR_DISTANCE_TWO = 1.6;
  const ITEM_TOP = (UESR_HIGH / 900) * 400;

  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const six = useRef();
  const seven = useRef();
  const eight = useRef();
  const nine = useRef();
  const ten = useRef();
  const eleven = useRef();

  const list = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ];
  const [changeModeHeight, setChangeModeHeight] = useState();
  const [arrBottom, setArrBottom] = useState(false);

  const handleScroll = () => {
    const y = document.scrollingElement.scrollTop;
    const num = y / LEVEL;
    let item = 0;
    if (y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE)) {
      item = 0;
    } else if (y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 2)) {
      item = 1;
    } else if (y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 3)) {
      item = 2;
    } else if (y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 4)) {
      item = 3;
    } else if (y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 5)) {
      item = 4;
    } else if (y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 6)) {
      item = 5;
    } else if (
      y <
      UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE_TWO * 11)
    ) {
      item = 6;
    } else if (
      y <
      UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE_TWO * 15)
    ) {
      item = 7;
    }

    if (item < 6) {
      list[item].current.style.transform = ` scale(${
        num -
        (UESR_HIGH * item * DISAPPEAR_DISTANCE + UESR_HIGH * DISAPPEAR_FIRST) /
          LEVEL
      })`;
      list[item].current.style.filter = `blur(${
        num / 5 -
        (UESR_HIGH * item * DISAPPEAR_DISTANCE + UESR_HIGH * DISAPPEAR_FIRST) /
          LEVEL /
          5
      }px)`;
      list[item].current.style.top = `${
        num * ITEM_TOP -
        ((UESR_HIGH * item * DISAPPEAR_DISTANCE + UESR_HIGH * DISAPPEAR_FIRST) /
          LEVEL) *
          ITEM_TOP
      }px`;
    } else if (item < 7) {
      if (
        num -
          (UESR_HIGH * item * DISAPPEAR_DISTANCE +
            UESR_HIGH * DISAPPEAR_FIRST) /
            LEVEL >=
        1
      ) {
        for (let i = 6; i <= 9; i++) {
          if ((-num + 31.5 + (UESR_WIDTH * (9 - 6)) / 50) * 15 >= 1) {
            list[i].current.style.transform = `scale(1) translateX(${
              (-num + 31.5 + (UESR_WIDTH * (i - 6)) / 50) * 15
            }%)`;
          }
          if (i != 6) {
            list[i].current.style.top = changeModeHeight;
          }
        }
      } else {
        list[item].current.style.transform = ` scale(${
          num -
          (UESR_HIGH * item * DISAPPEAR_DISTANCE +
            UESR_HIGH * DISAPPEAR_FIRST) /
            LEVEL
        }) translateX(0)`;
        list[item].current.style.filter = `blur(0px)`;
        list[item].current.style.top = `${
          num * ITEM_TOP -
          ((UESR_HIGH * item * DISAPPEAR_DISTANCE +
            UESR_HIGH * DISAPPEAR_FIRST) /
            LEVEL) *
            ITEM_TOP
        }px`;
        setChangeModeHeight(
          `${
            num * ITEM_TOP -
            ((UESR_HIGH * item * DISAPPEAR_DISTANCE +
              UESR_HIGH * DISAPPEAR_FIRST) /
              LEVEL) *
              ITEM_TOP -
            UESR_HIGH / 10
          }px`
        );
      }
    } else {
      list[9].current.style.transform = `translateY(${(-num + 56.8) * 10}%)`;
      list[10].current.style.transform = `translateY(${(-num + 56.8) * 10}%)`;
      list[10].current.style.top = `150vh`;
    }
    if (
      y > UESR_HIGH * DISAPPEAR_FIRST &&
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE)
    ) {
      one.current.style.display = `block`;
    } else {
      one.current.style.display = `none`;
    }
    if (
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 2) &&
      y > UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE)
    ) {
      two.current.style.display = `block`;
    } else {
      two.current.style.display = `none`;
    }
    if (
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 3) &&
      y > UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 2)
    ) {
      three.current.style.display = `block`;
    } else {
      three.current.style.display = `none`;
    }
    if (
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 4) &&
      y > UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 3)
    ) {
      four.current.style.display = `block`;
    } else {
      four.current.style.display = `none`;
    }
    if (
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 5) &&
      y > UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 4)
    ) {
      five.current.style.display = `block`;
    } else {
      five.current.style.display = `none`;
    }
    if (
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 6) &&
      y > UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 5)
    ) {
      six.current.style.display = `block`;
    } else {
      six.current.style.display = `none`;
    }
    if (
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 8) &&
      y > UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 6)
    ) {
      seven.current.style.display = `block`;
    } else {
      seven.current.style.display = `none`;
    }
    if (
      y < UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE_TWO * 15) &&
      y > UESR_HIGH * (DISAPPEAR_FIRST + DISAPPEAR_DISTANCE * 6.8)
    ) {
      eight.current.style.display = `block`;
      nine.current.style.display = `block`;
      ten.current.style.display = `block`;
      eleven.current.style.display = `block`;
    } else {
      eight.current.style.display = `none`;
      nine.current.style.display = `none`;
      ten.current.style.display = `none`;
      eleven.current.style.display = `none`;
    }
    if (y >= UESR_HIGH * 21.5) {
      setArrBottom(true);
    } else {
      setArrBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="phoneContentContainer">
        <div ref={one} className="phoneContentBox one">
          <div className="phoneContent">自動感應風扇 AIEF</div>
          <img className="mainPageImg" src={img4} />
        </div>
        <div ref={two} className="phoneContentBox one">
          <div className="phoneContent">
            手動模式可調整風速大小、定點和自動旋轉<br></br>
            可設定風扇轉向或是旋轉角度
          </div>
        </div>
        <div ref={three} className="phoneContentBox one">
          <div className="phoneContent">
            自動模式可選擇兩種模式<br></br>自動追蹤為追蹤熱源方向<br></br>
            環境散熱根據環境溫度調整風速和旋轉速度
          </div>
        </div>
        <div ref={four} className="phoneContentBox one">
          <div className="phoneContent">
            使用環保材料製作--玉米澱粉<br></br>
            機構的部分都是使用玉米澱粉製作的塑料
          </div>
        </div>
        <div ref={five} className="phoneContentBox one">
          <div className="phoneContent">
            搭載高效能MLX90614溫度感測器<br></br>可感測1公尺內的環境和物體的溫度
          </div>
        </div>
        <div ref={six} className="phoneContentBox one">
          <div className="phoneContent">
            電源使用交流110伏特<br></br>可直接插在插座上使用<br></br>{" "}
            無須額外轉換電壓 方便快速
          </div>
        </div>
        <div ref={seven} className="phoneContentBox one">
          <div className="phoneContent">
            利用手機app控制<br></br>
            從原本的遙控器汰換成手機app可以快速的控制電風扇
          </div>
        </div>

        <div ref={eight} className="phoneContentBox one">
          <div className="phoneContent">app首頁</div>
          <img className="mainPageImg" src={img3} />
        </div>
        <div ref={nine} className="phoneContentBox one">
          <div className="phoneContent">產品實體</div>
          <img className="mainPageImg2" src={img1} />
        </div>
        <div ref={ten} className="phoneContentBox one">
          <div className="phoneContent">logo</div>
          <img className="mainPageImg" src={img2} />
        </div>

        <div ref={eleven} className="phoneContentBox one">
          <div className="phoneContent">END</div>
          <a
            className={`phoneLinkBox ${arrBottom ? "phoneLinkAction" : null}`}
            href="https://drive.google.com/drive/folders/1FNIYf0Ylmu53IfdB7zN4okECB45lyobG?usp=sharing"
            target={"_blank"}
          >
            <img className="phoneLinkImg" src={folder}></img>
            <div className="phoneLinkText">更多資訊</div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Content;

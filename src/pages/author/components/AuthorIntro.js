import "./AuthorIntro.css";
import author1 from "./author1.jpg";
import author2 from "./author2.jpg";
import author3 from "./author3.jpg";
import A1 from "./A1.jpg";
import A2 from "./A2.jpg";
import A3 from "./A3.jpg";

import { useState, useEffect } from "react";
import { UESR_HIGH } from "../../../global/var";

const AuthorIntro = () => {
  const [arr, setArr] = useState(false);
  const [arr2, setArr2] = useState(false);
  const [arr3, setArr3] = useState(false);
  const [arr4, setArr4] = useState(false);
  const [arr5, setArr5] = useState(false);
  const [arr6, setArr6] = useState(false);

  const handleScroll = () => {
    const y = document.scrollingElement.scrollTop;
    const distanse = UESR_HIGH * 0.3;
    const distanse2 = distanse + UESR_HIGH * 0.8;
    const distanse3 = distanse + UESR_HIGH * 1.6;
    const distanse4 = distanse + UESR_HIGH * 2.2;
    const distanse5 = distanse + UESR_HIGH * 2.8;
    const distanse6 = distanse + UESR_HIGH * 3.8;

    if (y >= distanse) {
      setArr(true);
    } else {
      setArr(false);
    }
    if (y >= distanse2) {
      setArr2(true);
    } else {
      setArr2(false);
    }
    if (y >= distanse3) {
      setArr3(true);
    } else {
      setArr3(false);
    }
    if (y >= distanse4) {
      setArr4(true);
    } else {
      setArr4(false);
    }
    if (y >= distanse5) {
      setArr5(true);
    } else {
      setArr5(false);
    }
    if (y >= distanse6) {
      setArr6(true);
    } else {
      setArr6(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="intro-range">
        <div className={`intro-body ${arr === true ? "anime" : null}`}>
          <div className="intro-left">
            <img className="intro-author" src={author1}></img>
            <p className="intro-name">營運總監 : 高睿澤</p>
          </div>
          <div className="line"></div>
          <ul className="intro-ul">
            <li className="intro-li">
              名稱: <span className="intro-text">高睿澤</span>
            </li>
            <li className="intro-li">
              職位: <span className="intro-text">營運總監、硬體總工程師</span>
            </li>
            <li className="intro-li">
              月薪: <span className="intro-text">78k</span>
            </li>
            <li className="intro-li">
              具體工作內容:{" "}
              <span className="intro-text">
                1.處理產品3D列印之類硬體方面問題<br></br>
                2.針對產品的未來走向進行規劃和分析並且制定行銷策略
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="intro-range">
        <div className={`intro-body ${arr2 === true ? "anime" : null}`}>
          <div className="intro-left">
            <img className="intro-author" src={author2}></img>
            <p className="intro-name">軟體工程師 : 張立承</p>
          </div>
          <div className="line"></div>
          <ul className="intro-ul">
            <li className="intro-li">
              名稱: <span className="intro-text">張立承</span>
            </li>
            <li className="intro-li">
              職位: <span className="intro-text">軟體總工程師</span>
            </li>
            <li className="intro-li">
              月薪: <span className="intro-text">60k</span>
            </li>
            <li className="intro-li">
              具體工作內容:{" "}
              <span className="intro-text">
                1.負責編寫Arduino、App Inventor和網頁的程式<br></br>
                2.且給予軟體相關意見
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="intro-range">
        <div className={`intro-body ${arr3 === true ? "anime" : null}`}>
          <div className="intro-left">
            <img className="intro-author" src={author3}></img>
            <p className="intro-name">品質管理 : 林宸緯</p>
          </div>
          <div className="line"></div>
          <ul className="intro-ul">
            <li className="intro-li">
              名稱: <span className="intro-text">林宸緯</span>
            </li>
            <li className="intro-li">
              職位: <span className="intro-text">品質管理</span>
            </li>
            <li className="intro-li">
              月薪: <span className="intro-text">57k</span>
            </li>
            <li className="intro-li">
              具體工作內容:{" "}
              <span className="intro-text">
                1.負責檢查產品缺陷並對可以改善的部分提出意見
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="intro-range">
        <div className={`intro-body ${arr4 === true ? "anime" : null}`}>
          <div className="intro-left">
            <img className="intro-author" src={A1}></img>
            <p className="intro-name">顏質管理 : 崔辰卉</p>
          </div>
          <div className="line"></div>
          <ul className="intro-ul">
            <li className="intro-li">
              名稱: <span className="intro-text">崔辰卉</span>
            </li>
            <li className="intro-li">
              職位: <span className="intro-text">顏質管理</span>
            </li>
            <li className="intro-li">
              月薪: <span className="intro-text">100K</span>
            </li>
            <li className="intro-li">
              具體工作內容:{" "}
              <span className="intro-text">
                1.負責檢查產品缺陷並對可以改善的部分提出意見
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="intro-range">
        <div className={`intro-body ${arr5 === true ? "anime" : null}`}>
          <div className="intro-left">
            <img className="intro-author" src={A2}></img>
            <p className="intro-name">總策畫 : 劉毅安</p>
          </div>
          <div className="line"></div>
          <ul className="intro-ul">
            <li className="intro-li">
              名稱: <span className="intro-text">劉毅安</span>
            </li>
            <li className="intro-li">
              職位: <span className="intro-text">總策畫</span>
            </li>
            <li className="intro-li">
              月薪: <span className="intro-text">90K</span>
            </li>
            <li className="intro-li">
              具體工作內容:{" "}
              <span className="intro-text">
                1.負責檢查產品缺陷並對可以改善的部分提出意見
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="intro-range">
        <div className={`intro-body ${arr6 === true ? "anime" : null}`}>
          <div className="intro-left">
            <img className="intro-author" src={A3}></img>
            <p className="intro-name">總經理 : 鄭元皓</p>
          </div>
          <div className="line"></div>
          <ul className="intro-ul">
            <li className="intro-li">
              名稱: <span className="intro-text">鄭元皓</span>
            </li>
            <li className="intro-li">
              職位: <span className="intro-text">總經理</span>
            </li>
            <li className="intro-li">
              月薪: <span className="intro-text">95K</span>
            </li>
            <li className="intro-li">
              具體工作內容:{" "}
              <span className="intro-text">
                1.負責檢查產品缺陷並對可以改善的部分提出意見
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default AuthorIntro;

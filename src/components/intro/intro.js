import "./intro.css";
import author from "./social-media.gif";
import pic from "./photo.gif";

import { useState, useEffect } from "react";

const Intro = ({ page }) => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [gif, setGif] = useState("");

  const textIf = () => {
    if (page == 1) {
      setText("1");
      setText2("1");
    }
    if (page == 2) {
      setText("團隊介紹");
      setText2("此產品是由三個人的團隊製作");
      setGif(author);
    }
    if (page == 3) {
      setText("產品展示");
      setText2("以下為產品的圖片和影片");
      setGif(pic);
    }
  };

  useEffect(textIf, [page]);
  return (
    <>
      <div className="sub-title-bg" onClick={textIf}>
        <h2>{text}</h2>
        <p className="sub-text">{text2}</p>

        <img className="gif" src={gif}></img>
      </div>
    </>
  );
};
export default Intro;

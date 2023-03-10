import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import "./titleModel.css";
import folder from "./folder.png";

const TitleModel = forwardRef(({ end1, end2 }) => {
  const title = ["A", "I", "E", "F"];
  const text = [
    "A",
    "u",
    "t",
    "o",
    "m",
    "a",
    "t",
    "i",
    "c",
    " ",
    "I",
    "n",
    "d",
    "u",
    "c",
    "t",
    "i",
    "o",
    "n",
    " ",
    "E",
    "l",
    "e",
    "c",
    "t",
    "r",
    "i",
    "c",
    " ",
    "F",
    "a",
    "n",
  ];

  let delay = 0;

  return (
    <Html>
      <div className="title_model">
        <div>
          {title.map((item) => {
            delay += 300;
            return (
              <span
                className="title_text"
                style={{
                  animationDelay: delay + "ms",
                  WebkitAnimationDelay: delay + "ms",
                  MozAnimationDelay: delay + "ms",
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div>
          {text.map((item) => {
            if (item != " ") {
              delay += 50;
              return (
                <span
                  className="title_content"
                  style={{
                    animationDelay: delay + "ms",
                    WebkitAnimationDelay: delay + "ms",
                    MozAnimationDelay: delay + "ms",
                  }}
                >
                  {item}
                </span>
              );
            } else {
              return (
                <span
                  className="title_content"
                  style={{
                    animationDelay: delay + "ms",
                    WebkitAnimationDelay: delay + "ms",
                    MozAnimationDelay: delay + "ms",
                  }}
                >
                  &nbsp;
                </span>
              );
            }
          })}
        </div>
      </div>
      <div className="title_second">
        <p>????????????</p>
        <p>????????????</p>
        <p>????????????</p>
        <p>????????????</p>
      </div>
      <div className="title_third" ref={end1}>
        ??????????????????3D??????????????????app?????????<br></br>
        ??????????????????????????????????????????????????????????????????????????????????????????
      </div>
      <a
        className="title_forth"
        ref={end2}
        href="https://drive.google.com/drive/folders/1FNIYf0Ylmu53IfdB7zN4okECB45lyobG?usp=sharing"
        target={"_blank"}
      >
        <img className="title_img" src={folder}></img>
        <div>????????????</div>
      </a>
    </Html>
  );
});
export default TitleModel;

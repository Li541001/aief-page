import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import "./titleModel.css";

const TitleModel = forwardRef(() => {
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
        <p>功能強大</p>
        <p>快速使用</p>
        <p>方便控制</p>
        <p>環保省電</p>
      </div>
    </Html>
  );
});
export default TitleModel;

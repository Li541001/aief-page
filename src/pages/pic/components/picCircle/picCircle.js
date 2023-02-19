import { useState, useEffect, useRef } from "react";
import "./picCircle.css";

import img1 from "./11.jpg";
import img2 from "./12.jpg";
import img3 from "./21.jpg";
import img4 from "./22.jpg";
import img5 from "./31.png";
import img6 from "./32.jpg";



function PicCircle() {
  const circleList = [
    {
      id: 1,
      img: img1,
      classNames: "",
      dotClassName: "",
    },
    {
      id: 2,
      img: img2,
      classNames: "",
      dotClassName: "",
    },
    {
      id: 3,
      img: img3,
      classNames: "",
      dotClassName: "",
    },
    {
      id: 4,
      img: img4,
      picClassNames: "",
      dotClassName: "",
    },
    {
      id: 5,
      img: img5,
      picClassNames: "",
      dotClassName: "",
    },
    {
      id: 6,
      img: img6,
      picClassNames: "",
      dotClassName: "",
    },
  ];

  const [useimg, setUseimg] = useState(1);
  const [buttonStatus, setButtonStatus] = useState(false);
  const picTotal = circleList.length;
  const once = useRef(false);

  const hover = () => {
    setButtonStatus(true);
  };

  const notHover = () => {
    setButtonStatus(false);
  };

  const handle = () => {
    once.current = true;
    setUseimg((useimg) => useimg + 1);
    setButtonStatus(false);
  };

  useEffect(() => {
    if (buttonStatus) {
      return;
    }
    const id = setInterval(() => {
      handle();
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, [buttonStatus]);

  const clickArrow = (n) => {
    setUseimg(useimg + n);
    setButtonStatus(true);
    once.current = true;
  };
  const clickDot = (n) => {
    setUseimg(n);
    setButtonStatus(true);
    once.current = true;
  };

  useEffect(() => {
    if (!once.current) {
      return;
    } else {
      if (useimg > picTotal) {
        setUseimg(1);
      } else if (useimg < 1) {
        setUseimg(picTotal);
      }
      once.current = false;
      setButtonStatus(false);
    }
  }, [useimg]);

  return (
    <div className="cir_bg">
      <div className="cir_container">
        {circleList.map((item) => {
          let { id, img, picClassNames } = item;
          if (useimg === id) {
            picClassNames = "slider_yes";
          } else if (useimg === id + 1) {
            picClassNames = "slider_front";
          } else if (useimg === id - 1) {
            picClassNames = "slider_back";
          } else {
            picClassNames = "slider_no";
          }
          return (
            <>
              <div className={`animes ${picClassNames}`}>
                <img
                  className="cir_img"
                  src={img}
                  onMouseOver={hover}
                  onMouseLeave={notHover}
                ></img>
              </div>
            </>
          );
        })}

        <a
          class="prev"
          onClick={() => {
            clickArrow(-1);
          }}
        >
          &#10094;
        </a>
        <a
          class="next"
          onClick={() => {
            clickArrow(1);
          }}
        >
          &#10095;
        </a>
      </div>
      <div className="dot_container">
        {circleList.map((item) => {
          let { dotClassName, id } = item;
          if (useimg === id) {
            dotClassName = "active";
          } else {
            dotClassName = "";
          }
          return (
            <span
              className={`dot ${dotClassName}`}
              onClick={() => {
                clickDot(id);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default PicCircle;

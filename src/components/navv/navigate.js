import "./navigate.css";
import Logo from "./logo.png";
import Nav3line from "../nav3line/Nav3line";
import useRwd from "../useRwd/useRwd";
import "../nav3line/nav3line.css";
import { PAGE_TITLE_LIST } from "../../global/var";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navv = (props) => {
  const [value, setValue] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);

  const device = useRwd();

  const temp = useRef();

  const Doclick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (props.page == 1) {
      setValue(1);
    } else if (props.page == 2) {
      setValue(2);
    } else if (props.page == 3) {
      setValue(3);
    }
  }, []);

  if (device === "computer") {
    return (
      <>
        <header>
          <img className="logo" src={Logo} />
          <a
            href="https://li541001.github.io/choose"
            className="logo logo_link"
          ></a>
          <nav>
            <ul className="nav-ul">
              <li className="nav-li">
                <Link
                  to=""
                  className="link"
                  onClick={() => {
                    setValue(1);
                    props.setPage(1);
                  }}
                  style={{ backgroundColor: value == 1 && "#01a7d1" }}
                >
                  產品特色
                </Link>
              </li>
              <li className="nav-li">
                <Link
                  to="/author"
                  className="link"
                  onClick={() => {
                    setValue(2);
                    props.setPage(2);
                  }}
                  style={{ backgroundColor: value == 2 && "#01a7d1" }}
                >
                  團隊介紹
                </Link>
              </li>
              <li className="nav-li">
                <Link
                  to="/pic"
                  className="link"
                  onClick={() => {
                    setValue(3);
                    props.setPage(3);
                  }}
                  style={{ backgroundColor: value == 3 && "#01a7d1" }}
                >
                  產品展示
                </Link>
              </li>
              <li ref={temp} onClick={() => Doclick()} className="nav-li">
                <p
                  className={`link click ${clicked == true ? "action" : null}`}
                ></p>
              </li>
            </ul>
          </nav>
        </header>
        <Nav3line page={props.page} clicked={clicked} />
      </>
    );
  } else {
    return (
      <>
        <header>
          <img className="logo" src={Logo} />
          <a
            href="https://li541001.github.io/choose"
            className="logo logo_link"
          ></a>
          <nav>
            <div
              className="three_line_button_conatiner"
              onClick={() => setLinkOpen(!linkOpen)}
            >
              <div className="three_line_button"></div>
            </div>
            <ul className="deny_box">
              {PAGE_TITLE_LIST[4].map((item, index) => {
                let { label, link } = item;
                return (
                  <li className={`deny ${linkOpen == true ? "actions" : null}`}>
                    <Link
                      to={link}
                      className="deny_content"
                      onClick={() => {
                        setValue(index);
                        props.setPage(index);
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </>
    );
  }
};

export default Navv;

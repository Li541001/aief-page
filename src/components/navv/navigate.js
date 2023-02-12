import "./navigate.css";
import Logo from "./logo.png";
import Nav3line from "../nav3line/Nav3line";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navv = (props) => {
  const [value, setValue] = useState(1);
  const [clicked, setClicked] = useState(false);

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
  return (
    <>
      <header>
        <img className="logo" src={Logo} />
        <nav>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link
                to="/home"
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
};

export default Navv;

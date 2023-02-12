import "./AIEF.css";
import Fan from "./fan.png";

import { useEffect, useRef } from "react";
import { UESR_HIGH } from "../../global/var";

const Aief = () => {
  const title = useRef("");

  const handleScroll = () => {
    const high = document.scrollingElement.scrollTop * 0.55;
    const initHigh = UESR_HIGH * 0.052;
    const downLimit = UESR_HIGH * 0.21;
    const now = -initHigh + high;
    if (now <= downLimit) {
      title.current.style.top = now + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="title">
        <div ref={title} className="title-text">
          AIEF
        </div>
        <img className="fan" src={Fan}></img>
      </div>
    </>
  );
};
export default Aief;

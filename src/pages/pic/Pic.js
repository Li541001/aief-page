import Aief from "../../components/AIEF/Aief";
import Intro from "../../components/intro/intro";
import About from "../../components/about/About";
import PicCircle from "./components/picCircle/picCircle";
import VideoPlayer from "./components/videoplayer/videoPlayer";
import QRcode from "./components/qrcode/qrcode";

import { useState, useEffect } from "react";
import { UESR_HIGH } from "../../global/var";

const Pic = ({ setPage }) => {
  const [arr, setArr] = useState(false);
  const [arr2, setArr2] = useState(false);

  const handleScroll = () => {
    const y = document.scrollingElement.scrollTop;
    const distanse = UESR_HIGH * 1.2;
    const distanse2 = UESR_HIGH * 2.25;

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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.scrollingElement.scrollTo(0, 0);
    setPage(3);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Aief />
      <Intro page={3} />
      <PicCircle />
      <VideoPlayer arr={arr} />
      <QRcode arr={arr2} />
      <About />
    </>
  );
};
export default Pic;

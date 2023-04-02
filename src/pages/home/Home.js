import "./Home.css";
import CanvasContainer from "./components/canvasContainer/CanvasContainer";
import Content from "./phoneComponents/content/Content";
import useRwd from "../../components/useRwd/useRwd";
import HomeAief from "./phoneComponents/homeAief/HomeAief";
import PhoneTitleModel from "./phoneComponents/title/PhoneTitleModel";
import { useEffect, useRef } from "react";

const Home = ({ setPage }) => {
  const device = useRwd();
  const end1 = useRef();
  const end2 = useRef();

  useEffect(() => {
    setPage(1);
  }, []);

  if (device == "phone") {
    return (
      <>
        <HomeAief />
        <PhoneTitleModel />
        <Content />
      </>
    );
  } else {
    return <CanvasContainer end1={end1} end2={end2} />;
  }
};
export default Home;

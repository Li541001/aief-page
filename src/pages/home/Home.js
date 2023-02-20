import "./Home.css";
import CanvasContainer from "./components/canvasContainer/CanvasContainer";
import { useEffect, useRef } from "react";

const Home = ({ setPage }) => {
  const end1 = useRef();
  const end2 = useRef();

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <>
      <CanvasContainer end1={end1} end2={end2} />
    </>
  );
};
export default Home;

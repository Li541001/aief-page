import "./Home.css";
import CanvasContainer from "./components/canvasContainer/CanvasContainer";
import { useEffect } from "react";
import ButtonContainer from "./components/buttonContainer/buttonContainer";

const Home = ({ setPage }) => {
  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <>
      <CanvasContainer />
    </>
  );
};
export default Home;

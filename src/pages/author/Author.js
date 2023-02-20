import "./author.css";
import Aief from "../../components/AIEF/Aief.js";
import Intro from "../../components/intro/intro";
import AuthorIntro from "./components/AuthorIntro";
import About from "../../components/about/About.js";
import { useEffect } from "react";

const Author = ({ setPage }) => {
  useEffect(() => {
    document.scrollingElement.scrollTo(0, 0);
    setPage(2);
  }, []);

  return (
    <>
      <Aief />
      <Intro page={2} />
      <AuthorIntro />
      <About />
    </>
  );
};

export default Author;

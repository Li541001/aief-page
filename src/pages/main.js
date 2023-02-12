import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./home/Home";
import Author from "./author/Author";
import Pic from "./pic/Pic";
import Navv from "../components/navv/navigate";

const Main = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <HashRouter>
        <Navv page={page} setPage={setPage} />
        <Routes>
          <Route path="" element={<Home setPage={setPage} />} />
          <Route exact path="/author" element={<Author setPage={setPage} />} />
          <Route exact path="/pic" element={<Pic setPage={setPage} />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Main;

import "./nav3line.css";
import { useEffect, useState } from "react";
import { PAGE_TITLE_LIST } from "../../global/var";

const Nav3line = ({ page, clicked }) => {
  const [pageID, setPageID] = useState(2);

  const DoScrollTo = (high) => {
    window.scrollTo(0, high);
  };

  useEffect(() => {
    setPageID(page);
  }, [page]);

  return (
    <>
      <ul className="deny_box">
        {PAGE_TITLE_LIST[pageID].map((item) => {
          let { label, pageHigh } = item;
          return (
            <li
              onClick={() => DoScrollTo(pageHigh)}
              className={`deny ${clicked == true ? "actions" : null}`}
            >
              <p className="deny_content">{label}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Nav3line;

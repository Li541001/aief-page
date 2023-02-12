import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import "./buttonIntro.css";

const ButtonIntro = forwardRef(({ text, top, button_ref, id }) => {
  const handle = () => {};
  return (
    <Html>
      <div
        ref={button_ref}
        className="button_container"
        style={{ top: top + "vh" }}
      >
        <div className="button_container2">
          <span className="arrow_text"></span>
          <span className="button" onClick={handle}>
            {text}
          </span>
        </div>
      </div>
    </Html>
  );
});
export default ButtonIntro;

import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import "./content.css";

const contentright = forwardRef(() => {
  return (
    <Html>
      <div className="content_bg_right">
        <h1></h1>
        <p></p>
      </div>
    </Html>
  );
});
export default contentright;

import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import "./buttonContainer.css";

const ButtonContainer = forwardRef(() => {
  return (
    <Html>
      <div className="button_line"></div>
    </Html>
  );
});
export default ButtonContainer;

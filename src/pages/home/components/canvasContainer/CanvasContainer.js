import "./CanvasContainer.css";
import ModelContainer from "../modelContainer/ModelContainer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Stage } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Candy } from "./Candy";

const CanvasContainer = () => {
  const button_ref1 = useRef();
  const button_ref2 = useRef();

  return (
    <div className="canvas_contrainer">
      <Canvas shadows>
        <ScrollControls pages={18}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Stage intensity={1} environment="city">
              <Candy button_ref1={button_ref1} button_ref2={button_ref2} />
            </Stage>
          </Suspense>
          <ModelContainer button_ref1={button_ref1} button_ref2={button_ref2} />
        </ScrollControls>
      </Canvas>
    </div>
  );
};
export default CanvasContainer;

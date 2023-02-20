import "./CanvasContainer.css";
import ModelContainer from "../modelContainer/ModelContainer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Stage } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Candy } from "./Candy";

const CanvasContainer = ({ end1, end2 }) => {
  return (
    <div className="canvas_contrainer">
      <Canvas shadows>
        <ScrollControls pages={18}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Stage intensity={1} environment="city">
              <Candy end1={end1} end2={end2} />
            </Stage>
          </Suspense>
          <ModelContainer end1={end1} end2={end2} />
        </ScrollControls>
      </Canvas>
    </div>
  );
};
export default CanvasContainer;

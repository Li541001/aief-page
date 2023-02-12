import "./ModelContainer.css";
import Contentleft from "../content/contentleft";
import Contentright from "../content/contentright";
import TitleModel from "../content/titleModel";
import ButtonIntro from "../buttonIntro/buttonIntro";
import ButtonContainer from "../buttonContainer/buttonContainer";

const ModelContainer = (props) => {
  return (
    <>
      <TitleModel />
      <Contentright />
      <Contentleft />
      <ButtonIntro
        text="了解更多"
        top={1800}
        button_ref={props.button_ref1}
        id={true}
      />
      <ButtonIntro
        text="3D模型模擬"
        top={1820}
        button_ref={props.button_ref2}
        id={false}
      />
    </>
  );
};
export default ModelContainer;

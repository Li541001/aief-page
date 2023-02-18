import "./ModelContainer.css";
import Contentleft from "../content/contentleft";
import Contentright from "../content/contentright";
import TitleModel from "../content/titleModel";

const ModelContainer = ({end1,end2}) => {
  return (
    <>
      <TitleModel end1={end1} end2={end2}/>
      <Contentright />
      <Contentleft />

    </>
  );
};
export default ModelContainer;

import "./HomeAief.css";
import Fan from "../../../../components/AIEF/fan.png";

const Aief = () => {
  return (
    <>
      <div className="phone_title">
        <div className="phone_title-text">產品介紹</div>
        <img className="phone_fan" src={Fan}></img>
      </div>
    </>
  );
};
export default Aief;

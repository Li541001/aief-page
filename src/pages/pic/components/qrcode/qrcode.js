import "../style.css";
import qrcode from "./qrcode.png";
import arrow from "./arrow.png";

const QRcode = (props) => {
  return (
    <div className="qr_range">
      <div className={`qr_box ${props.arr === true ? "active" : null}`}>
        <img className="qr_img" src={qrcode}></img>
        <div className="qr_container">
          <h3 className="qr_title">更多資訊</h3>
          <p className="qr_text">掃左方QRcode可以獲得更多關於AIEF的資訊</p>
          <img className="arrow" src={arrow}></img>
        </div>
      </div>
    </div>
  );
};
export default QRcode;

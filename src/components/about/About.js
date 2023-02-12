import "./About.css";
import team from "./team.gif";
import location from "./location.gif";
import phone from "./phone.gif";
import fix from "./fix.gif";

const About = () => {
  return (
    <div className="about-range">
      <div className="about-ctrl">
        <img className="about-gif" src={team} />
        <p className="about-content">: 台北市大安高級工業職業學校</p>
      </div>
      <div className="about-ctrl">
        <img className="about-gif" src={phone} />
        <p className="about-content">: 02-2709-1630</p>
      </div>
      <div className="about-ctrl">
        <img className="about-gif" src={location} />
        <p className="about-content">: 台北市大安區復興南路二段52號</p>
      </div>
      <div className="about-ctrl">
        <img className="about-gif" src={fix} />
        <p className="about-content">: 張先生</p>
      </div>
      <p className="about-content">
        為確保網頁瀏覽體驗，請確保您的網頁瀏覽器已更新至最新版本。因部分網頁內容不相容於Internet
        Explorer瀏覽器，建議您使用Chrome、Firefox進行瀏覽。
      </p>
      <p className="about-content">
        Copyright © by AIEF Team. All Rights Reserved.
      </p>
    </div>
  );
};
export default About;

import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import "./content.css";

const contentright = forwardRef(() => {
  return (
    <Html>
      <div className="content_bg_right">
        <div className="content_title">使用環保材料製作--玉米澱粉</div>
        <div className="content_content">
          在機構的部分都是使用玉米澱粉製作的塑料<br></br> 3D列印而成
        </div>
        <div className="content_title">搭載高效能MLX90614溫度感測器</div>
        <div className="content_content">
          可感測1公尺內的環境和物體的溫度<br></br> 讓風扇可以自動調節環境的溫度
        </div>
        <div className="content_title">電源使用交流110伏特</div>
        <div className="content_content">
          可直接插在插座上使用<br></br> 無須額外轉換電壓 方便快速
        </div>
        <div className="content_title">利用手機app控制</div>
        <div className="content_content">
          從原本的遙控器汰換成手機app可以快速的控制電風扇<br></br>
          再加上不容易有遙控器老化的問題<br></br>也不需要時常更換電池
        </div>
      </div>
    </Html>
  );
});
export default contentright;

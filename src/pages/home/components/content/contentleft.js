import { Html } from "@react-three/drei";
import { forwardRef } from "react";
import "./content.css";

const contentleft = forwardRef(() => {
  return (
    <Html>
      <div className="content_bg_left">
        <div className="content_title">多種模式</div>
        <div className="content_content">
          手動模式: 自動旋轉、定點、風速<br></br>自動模式: 自動追蹤、環境散熱
        </div>
        <div className="content_title">可調整電風扇多種參數</div>
        <div className="content_content">
          手動模式可調整風速大小、定點和自動旋轉<br></br>定點: 可設定風扇轉向
          <br></br>自動旋轉: 可設定旋轉角度的最大、最小值，並且調整轉的速度
        </div>
        <div className="content_title">智慧感應</div>
        <div className="content_content">
          自動模式可選擇自動追蹤或是環境散熱<br></br>自動追蹤: 自動追蹤熱源方向
          <br></br>環境散熱: 會根據環境溫度調整風速和旋轉速度
        </div>
      </div>
    </Html>
  );
});
export default contentleft;

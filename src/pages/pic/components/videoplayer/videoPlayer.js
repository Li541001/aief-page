import "../style.css";
import video from "./AIEF_video.mp4";

const VideoPlayer = (props) => {
  return (
    <div className="mp4_range">
      <video
        muted
        src={video}
        autoPlay
        className={`video ${props.arr === true ? "video_active" : null}`}
        loop="loop"
        controls
      ></video>
    </div>
  );
};
export default VideoPlayer;

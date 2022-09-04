import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import UsePlayer from "../hooks/usePlayer";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
  setCurrentSong,
  songs,
  activeLibraryHandler,
}) => {
  const {
    getTime,
    dragHandler,
    linearGradient,
    trackAnimation,
    skipTrackHandler,
    playSongHandler,
  } = UsePlayer({
    setSongInfo,
    audioRef,
    setCurrentSong,
    songs,
    activeLibraryHandler,
    setIsPlaying,
    currentSong,
    songInfo,
    isPlaying
  });

  return (
    <div className="min-h-[12vh] flex flex-col items-center justify-between">
      <div className="time-control items-center flex justify-between w-full bg-transparent focus:outline-none ">
        <p className="p-4">{getTime(songInfo.currentTime)}</p>
        <div
          style={linearGradient}
          className="track bg-slate-400 w-full h-4 relative rounded-2xl overflow-hidden"
        >
          <input
            className="range w-full cursor-pointer bg-transparent appearance-none focus:outline-none"
            type="range"
            min="0"
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div
            style={trackAnimation}
            className="animate-track bg-[#cccccc] absolute left-0 top-0 w-full h-full pointer-events-none translate-x-[0%]"
          ></div>
        </div>
        <p className="p-4">
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className="play-control md:w-7/12 flex justify-between w-8/12">
        <FontAwesomeIcon
          className="skip-back cursor-pointer w-2"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play cursor-pointer w-3"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward cursor-pointer w-2"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;

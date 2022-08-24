import { useState, useRef } from "react";
import "../Style/StyleHome.css";
import LibraryIcon from "../components/icons/library";
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";
import data from "../data/music";

export default function Home() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    // Calculate Percentage
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage: animation,
    });
  };

  const activeLibraryHandler = (nextPrev) => {
    const newSong = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);
  };

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className=" min-h-screen grid place-items-center ">
      <div className="player relative overflow-hidden p-6 mx-auto max-h-[90vh]">
        <div className="flex justify-end">
          <button className="text-gray-700" onClick={()=> setLibraryStatus(!libraryStatus)}>
           <LibraryIcon/>
          </button>
        </div>
        <Song currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          activeLibraryHandler={activeLibraryHandler}
        />
        <Library
          songs={songs}
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          libraryStatus={libraryStatus}
        />
        <audio
          onTimeUpdate={(e) => timeUpdateHandler(e)}
          onLoadedMetadata={(e) => timeUpdateHandler(e)}
          onEnded={songEndHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import "../Style/StyleHome.css";
import LibraryIcon from "../components/icons/library";
import Player from "./Player";
import Song from "./Song";
import Library from "./Library";
import UseSongHandler from "../hooks/useSongHandler";

export default function Home() {
  const {
    songEndHandler,
    activeLibraryHandler,
    timeUpdateHandler,
    libraryStatus,
    setLibraryStatus,
    setIsPlaying,
    currentSong,
    isPlaying,
    songInfo,
    setSongInfo,
    audioRef,
    songs,
    setSongs,
    setCurrentSong,
  } = UseSongHandler();
  return (
    <div
      className="min-h-screen grid place-items-center"
    >
      <div className="player relative overflow-hidden p-6 mx-auto max-h-[90vh]">
        <div className="flex justify-end">
          <button
            className="text-gray-700 flex items-center"
            onClick={() => setLibraryStatus(!libraryStatus)}
          >
            <LibraryIcon /><p>Library</p> 
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

import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`absolute rounded-xl max-h-[45vh] lg:max-h-[67vh] left-0 transition-all ease-in-out bg-[#eaeef3] border-4 h-full overflow-y-auto opacity-0 pointer-events-none scrollbar-hide bottom-[-70%] ${libraryStatus ? "opacity-100 bottom-[0%] pointer-events-auto" : ""}`}>
      <h2>Music list</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setSongs={setSongs}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
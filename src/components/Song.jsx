import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container min-h-[40vh] flex flex-col justify-center items-center sm:-mb-0 -mb-3">
      <img width='100%' height='100%' className="w-10/12 h-auto rounded-full" src={currentSong.cover} alt="Song Cover" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
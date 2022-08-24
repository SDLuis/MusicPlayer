import React from "react";

const LibrarySong = ({
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
}) => {
  const selectSongHandler = async () => {
    await setCurrentSong(song);

    // Add Active State
    const newSong = songs.map((song) => {
      if (song.id === id) {
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

    // Check if the song is Playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={selectSongHandler}
      className={`library-song flex items-center py-2 px-4 cursor-pointer ${song.active ? "border-2  bg-slate-300" : ""}`}
    >
      <img className="w-2/12" src={song.cover} alt="Song Cover" />
      <div className="song-description pl-4">
        <h3 className="text-sm">{song.name}</h3>
        <h4 className="text-xs">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
import React from "react";

export default function UseLibrary({
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
}) {
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

  return { selectSongHandler };
}

import UseLibrary from "../hooks/useLibrary";

const LibrarySong = ({
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
}) => {
  const { selectSongHandler } = UseLibrary({
    song,
    setSongs,
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    id,
  });
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song flex items-center py-2 px-4 cursor-pointer ${
        song.active ? "border-2  bg-slate-300" : ""
      }`}
    >
      <img width={'100%'} height={'100%'} className="w-2/12" src={song.cover} alt="Song Cover" />
      <div className="song-description pl-4">
        <h3 className="text-sm">{song.name}</h3>
        <h4 className="text-xs">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

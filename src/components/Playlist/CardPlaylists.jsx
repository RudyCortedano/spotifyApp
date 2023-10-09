import React, { useEffect } from "react";
import usePlaylist from "../../hooks/usePlaylist";
import Spinners from "../Shared/Spinners";

const CardPlaylists = ({playMusic, playlist,}) => {

  const {deletePlaylist, setPlaylist, loading} = usePlaylist()


  const handleDelete = () => {
    deletePlaylist(playMusic.id);
  };

  console.log(playMusic)

  return (
    <div>
      <div className="playlist__item">
        <li>{playMusic.title}</li>
        <li>{playMusic.to}</li>
        <li>{playMusic.message}</li>
        <ul className="playlist__sub">
          {playMusic.tracks?.map((track) => (
            <li key={track.id}>{track.name}</li>
          ))}
          {/* <li>{playMusic.tracks[0]?.name}</li> */}
        </ul>
        <button className="playlist__update">Update</button>
        <button onClick={handleDelete} className="playlist__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardPlaylists;

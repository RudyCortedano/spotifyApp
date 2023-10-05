import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ArtistInfo from "../components/ArtistPage/ArtistInfo";
import ArtistAlbum from "../components/ArtistPage/ArtistAlbum";
import ArtistSongTop from "../components/ArtistPage/ArtistSongTop";
import Spinners from "../components/Shared/Spinners";

const ArtistPage = () => {
  const { id } = useParams();

  const [artist, getArtist, loading] = useFetch();

  useEffect(() => {
    getArtist(`/api/artists/${id}`);
  }, [id]);

  if(loading){
    return <Spinners/>
  }

  return (
    <main className="artistPage__global">
      <div className="artistPage__content">
        <ArtistInfo artist={artist} />
        <ArtistAlbum albums={artist?.albums} />
        <ArtistSongTop tracks={artist?.songsTop} />
      </div>
    </main>
  );
};

export default ArtistPage;

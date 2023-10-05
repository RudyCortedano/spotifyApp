import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TrackInfo from "../components/TrackPage/TrackInfo";
import TrackReleated from "../components/TrackPage/TrackReleated";
import Spinners from "../components/Shared/Spinners";

const TracksPage = () => {
  const { id } = useParams();

  const [track, getTrack, loading] = useFetch();

  useEffect(() => {
    getTrack(`/api/tracks/${id}`);
  }, [id]);

  if(loading){
    return <Spinners/>
  }

  return (
    <>
      <div className="trackinfo__global">
        <div className="trackinfo__content">
          <TrackInfo track={track} />
          <TrackReleated artist={track?.artists[0].name} />
        </div>
      </div>
    </>
  );
};

export default TracksPage;

import React, { useState } from "react";

const TrackInfo = ({ track }) => {
  const [visible, setVisible] = useState(false);

  const handlePlayer = () => {
    setVisible(!visible);
  };

  return (
    <>
      <article className="trackinfo__init">
        <div className="trackinfo__imageInfo">
          <header className="trackinfo__positionImage">
            <img
              className="trackinfo__image"
              onClick={handlePlayer}
              src={track?.album.images[0].url}
              alt=""
            />
          </header>
          <section className="trackinfo__info">
            <h3>{track?.name}</h3>
            <ul className="trackinfo__list">
              {track?.artists.map((artist) => (
                <li key={artist.id}>{artist.name}</li>
              ))}
            </ul>
            <p>
              <span>Disc: </span>
              {track?.album.name}
            </p>
            <p>
              <span>Release date: </span>
              {track?.album.release_date}
            </p>
          </section>
        </div>
      </article>
      {visible ? (
        <div className="trackinfo__position__iframe">
          <iframe
            className="trackinfo__iframe"
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
            width="450px"
            height="250"
            frameBorder="0"
            allowFullsScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          </div>

      ) : (
        <span></span>
      )}
    </>
  );
};

export default TrackInfo;

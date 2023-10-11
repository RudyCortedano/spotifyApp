import React, { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import TracksCard from "../components/HomePage.jsx/TracksCard";
import Spinners from "../components/Shared/Spinners";

const HomePage = () => {
  const [listTracks, getListTracks, loading] = useFetch();
  // const [inputValue, setInputValue] = useState("ricardo arjona");
  const [inputValue, setInputValue] = useState("jose jose");
  const [quantityPerPage, setQuantityPerPage] = useState(10);

  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`);
  }, [inputValue,quantityPerPage]);

  // console.log(listTracks);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValue(inputSearch.current.value.trim().toLowerCase());
  };

  const handleTracksPerPage = (e) => {
    setQuantityPerPage(e.target.value);
  };

  if(loading){
    return<Spinners/>
  }

  return (
    <>
    
        <label className="menu__rigth" htmlFor="checkRigth">
            <i className="fa-solid fa-bars"></i>
        </label>

        <div className="homepage__global">
        <div className="homepage__content">
          <form  onSubmit={handleSubmit}>
            <input className="homepage__input" ref={inputSearch} type="text" placeholder="name music or name artist"/>
            <select className="homepage__select" onChange={handleTracksPerPage} defaultValue={10}>
              {[2, 4, 6, 8, 10].map((tracksPerPage) => (
                <option className="homepage__option" value={tracksPerPage} key={tracksPerPage}>
                  {tracksPerPage}
                </option>
              ))}
            </select>
          </form>
          <div className="home__page__cards">
            {listTracks?.tracks.items.map((track) => (
              <TracksCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default HomePage;

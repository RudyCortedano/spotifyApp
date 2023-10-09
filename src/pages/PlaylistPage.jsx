import { useEffect, useState } from "react";
import usePlaylist from "../hooks/usePlaylist";
import CardPlaylists from "../components/Playlist/CardPlaylists";
import { Swiper, SwiperSlide } from 'swiper/react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules'; 

const PlaylistPage = () => {
  const { playlist, getPlaylist } = usePlaylist();

  useEffect(() => {
    getPlaylist();
  }, [playlist]);

  // console.log(playlist)

  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}      
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }
        pagination={{el:'.swiper-pagination', clickable:true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable:true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
          
        <main className="playlist__init">

            {playlist?.map((playMusic) => (
              <SwiperSlide key={playMusic.id} >
                <CardPlaylists playMusic={playMusic} playlist={playlist} />        
              </SwiperSlide>        
            ))}

        </main>

        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline">

            </ion-icon> */}
            <i className="fa-solid fa-chevron-left"></i>
          </div>

          <div className="swiper-button-next  slider-arrow">
            {/* <ion-icon name="arrow-forward-outline">

            </ion-icon> */}
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div className="swiper-pagination">

          </div>
        </div>

      </Swiper>
    </div>
  )
};

export default PlaylistPage;







































// import { useEffect, useState } from "react";
// import usePlaylist from "../hooks/usePlaylist";
// import CardPlaylists from "../components/Playlist/CardPlaylists";

// const PlaylistPage = () => {
//   const { playlist, getPlaylist } = usePlaylist();

//   useEffect(() => {
//     getPlaylist();
//   }, [playlist]);



//   return (
//     <main className="playlist__init">
//       <ul className="playlist__list">
//         {playlist?.map((playMusic) => (
//           <CardPlaylists key={playMusic.id} playMusic={playMusic} playlist={playlist} />        
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default PlaylistPage;


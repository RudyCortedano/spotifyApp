import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules'; 
import usePlaylist from '../../hooks/usePlaylist';
// import useFetch from '../hooks/useFetch';

const PlaylistSlider = ({playMusic}) => {
  // const url = `https://rickandmortyapi.com/api/character`;
  // const [allcharacters, getAllcharacters] = useFetch(url);

  // useEffect(() => {
  //   getAllcharacters();
  // }, []);
  const {deletePlaylist, setPlaylist, loading} = usePlaylist()


  const handleDelete = () => {
    deletePlaylist(playMusic.id);
  };

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
      
          


        <SwiperSlide>

        </SwiperSlide>
          

        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">

            </ion-icon>
          </div>

          <div className="swiper-button-next  slider-arrow">
            <ion-icon name="arrow-forward-outline">

            </ion-icon>
          </div>
          <div className="swiper-pagination">

          </div>
        </div>

      </Swiper>
    </div>
  )
}

export default PlaylistSlider;
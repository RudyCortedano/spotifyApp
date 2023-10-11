import { useEffect } from "react";
import usePlaylist from "../hooks/usePlaylist";
import CardPlaylists from "../components/Playlist/CardPlaylists";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation,  Scrollbar,  A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const PlaylistPage = () => {
  const { playlist, getPlaylist } = usePlaylist();

  useEffect(() => {
    getPlaylist();
  }, [playlist]);

  // console.log(playlist)

  return (
    // <div className="container">
      // <h1 className="heading">Flower Gallery</h1>
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,          
        ]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // slidesPerView={'auto'}
        // spaceBetween={50}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="container"
      >
        {
          playlist?.map(playMusic =>(
            <SwiperSlide key={playMusic.id} >
              <CardPlaylists playMusic={playMusic} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    // </div>
  );
};

export default PlaylistPage;
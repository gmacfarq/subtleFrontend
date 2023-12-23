// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './Gallery.css';

// import required modules
import { Mousewheel,} from 'swiper/modules';
/**
 * Gallery component
 * @module Contact
 * @exports Contact
 * @returns {JSX} The Contact component
 */
function Gallery() {

  const galleryPhotos = [];
  for (let i = 1; i <= 40; i++) {
    galleryPhotos.push({
      id: i,
      path: `./images/SO${i}.JPG`,
      alt: `Image ${i}`
    });
  }

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Swiper
        modules={[ Mousewheel]}
        spaceBetween={10}
        slidesPerView={'auto'}
        _freeModeNoMomentumRelease={true}
        keyboardControl={true}
        freeMode={true}
        grabCursor={true}
        centeredSlides={true}
        lazy={true}
        loop={true}
        direction="horizontal"
        mousewheel={true}
        invert={true}
        keyboard={true}
        className="my-swiper"
      >
        {galleryPhotos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img className={'gallery-pic'} src={photo.path} alt={photo.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

}

export default Gallery;
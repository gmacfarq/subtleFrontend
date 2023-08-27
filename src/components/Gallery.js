// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import image from '../static/gallery/SO1.JPG';

import './Gallery.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
/**
 * Gallery component
 * @module Contact
 * @exports Contact
 * @returns {JSX} The Contact component
 */
function Gallery() {

  const galleryPhotos = [];
  for (let i = 1; i <= 41; i++) {
    galleryPhotos.push({
      id: i,
      path: require(`../static/gallery/SO${i}.JPG`).default,
      alt: `Image ${i}`
    });
  }

  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      <>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={image} alt={'testphoto'} />
              testing</SwiperSlide>
          {galleryPhotos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <img src={photo.path} alt={photo.alt} />
              testing
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );

}

export default Gallery;
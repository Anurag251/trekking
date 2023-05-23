/* eslint-disable react/prop-types */
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import React from "react";
import PackageDescriptionComponent from "./PackageDescription/PackageDescription.component";

// import packageImage from "../../assets/images/banner.jpg";

const PackageGalleryComponent = ({ selectedPackage }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <React.Fragment>
      <div className="PackageGalleryComponent">
        <div className="package-gallery">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed="2000"
            // navigation={true}
            // thumbs={{
            //   swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            // }}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {/* selectedPackage !== null
              ? selectedPackage.galleryimage.map((galleryimage, idx) => (
                  <SwiperSlide className="image-area" key={idx}>
                    <img
                      src={
                        galleryimage !== null ? galleryimage.original_image : ""
                      }
                    />
                  </SwiperSlide>
                ))
              : null */}
            <SwiperSlide className="image-area">
              <img
              className="gallery-image-view"
                src={
                  selectedPackage !== null
                    ? selectedPackage.image.original_image
                    : ""
                }
              />
            </SwiperSlide>
          </Swiper>
          {/* <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide className="image-button">
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper> */}
        </div>

        <PackageDescriptionComponent selectedPackage={selectedPackage} />
      </div>
    </React.Fragment>
  );
};

export default PackageGalleryComponent;

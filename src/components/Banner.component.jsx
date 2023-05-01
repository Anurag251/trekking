import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import bannerImage from "../assets/images/banner.jpg";
import bannerImage2 from "../assets/images/banner2.jpeg";
import bannerImage3 from "../assets/images/banner3.jpeg";

const BannerComponent = () => {
  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${bannerImage})` }}
          >
            <div className="content">Nepal</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${bannerImage2})` }}
          >
            <div className="content">Nepal</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${bannerImage3})` }}
          >
            <div className="content">Bhutan</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;

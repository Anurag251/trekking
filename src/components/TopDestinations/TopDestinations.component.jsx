import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import SectionTitleComponent from "../Titles/SectionTitle.component";
import CardComponent from "../Cards/Card.component";

const TopDestinationsComponent = () => {
  return (
    <div className="top-destinations">
      <SectionTitleComponent title="Packages">
        Top destinations
      </SectionTitleComponent>

      <Swiper
        slidesPerView={2}
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <CardComponent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopDestinationsComponent;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import CardComponent from "../Cards/Card.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";

const RecommendedForYouComponent = () => {
  return (
    <div className="recommended-for-you">
      <SectionTitleComponent title="Packages">
        Get inspired for your next trip!
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

      <div className="button-area">
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default RecommendedForYouComponent;

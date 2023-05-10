import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import TeamsCardComponent from "../Cards/TeamsCard.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";

const OurTeamsComponent = () => {
  return (
    <div className="our-teams">
      <SectionTitleComponent title="Teams">
        Meet our Local Travel Specialists
      </SectionTitleComponent>

      {/* <div className="teams-list">
        <TeamsCardComponent />
        <TeamsCardComponent />
        <TeamsCardComponent />
        <TeamsCardComponent />
        <TeamsCardComponent />
        <TeamsCardComponent />
      </div> */}

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
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>
          <TeamsCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <TeamsCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <TeamsCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <TeamsCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <TeamsCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <TeamsCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <TeamsCardComponent />
        </SwiperSlide>
      </Swiper>

      <div className="button-area">
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default OurTeamsComponent;

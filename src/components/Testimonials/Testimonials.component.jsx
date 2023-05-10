import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import SectionTitleComponent from "../Titles/SectionTitle.component";
import TestimonialsCardComponent from "../Cards/testimonialsCard.component";

const TestimonialsComponent = () => {
  return (
    <div className="testimonials">
      <SectionTitleComponent title="Testimonials">
        Testimonials
      </SectionTitleComponent>

      <Swiper
        slidesPerView={1}
        speed={1000}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialsCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialsCardComponent />
        </SwiperSlide>
      </Swiper>

      <div className="button-area">
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default TestimonialsComponent;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import SectionTitleComponent from "../Titles/SectionTitle.component";
import TestimonialsCardComponent from "../Cards/testimonialsCard.component";
import { AllDataContext } from "../../context/AllData.context";
import { useContext } from "react";
import LoadingComponent from "../Loading.component";

const TestimonialsComponent = () => {
  const { reviewDatas } = useContext(AllDataContext);

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
        {reviewDatas !== null
          ? reviewDatas.map((reviewData, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialsCardComponent cardData={reviewData} />
              </SwiperSlide>
            ))
          : <LoadingComponent />}
      </Swiper>
    </div>
  );
};

export default TestimonialsComponent;

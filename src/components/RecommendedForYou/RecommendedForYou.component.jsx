import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import SectionTitleComponent from "../Titles/SectionTitle.component";
import { AllDataContext } from "../../context/AllData.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BigCardComponent from "../Cards/BigCard.component";
import LoadingComponent from "../Loading.component";

const RecommendedForYouComponent = () => {
  const { tripDatas } = useContext(AllDataContext);
  return (
    <div className="recommended-for-you">
      <SectionTitleComponent title="Packages">
        Get inspired for your next trip!
      </SectionTitleComponent>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
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
        className="mySwiper"
      >
        {tripDatas !== null
          ? tripDatas
              .filter((categoriesData) => categoriesData.recommended === 1)
              .map((tripData, idx) => (
                <SwiperSlide key={idx}>
                  <BigCardComponent key={idx} cardData={tripData} />
                </SwiperSlide>
              ))
          : <LoadingComponent />}
      </Swiper>

      <div className="button-area">
        <Link to="/all-next-trip">
          <button className="view-all-button">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedForYouComponent;

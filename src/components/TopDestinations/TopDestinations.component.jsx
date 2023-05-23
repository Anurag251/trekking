import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import SectionTitleComponent from "../Titles/SectionTitle.component";
import CardComponent from "../Cards/Card.component";
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";
import { Link } from "react-router-dom";

const TopDestinationsComponent = () => {
  const { categoriesDatas } = useContext(AllDataContext);

  return (
    <div className="top-destinations">
      <SectionTitleComponent title="Packages">
        Create Your Custom Made Trip to Nepal
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
        {categoriesDatas !== null
          ? categoriesDatas.map((categoriesData, idx) => (
              <SwiperSlide key={idx}>
                <CardComponent cardData={categoriesData} />
              </SwiperSlide>
            ))
          : "Loading..."}
      </Swiper>

      <div className="button-area">
        <Link to="/all-trip">
          <button className="view-all-button">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TopDestinationsComponent;

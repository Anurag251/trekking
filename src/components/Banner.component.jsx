import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import bannerImage from "../assets/images/banner.jpg";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import LoadingComponent from "./Loading.component";

const BannerComponent = () => {
  const { bannerDatas } = useContext(AllDataContext);

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
        {bannerDatas !== null
          ? bannerDatas.map((bannerData, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${
                      bannerData.image !== null
                        ? bannerData.image.original_image
                        : ""
                    })`,
                  }}
                >
                  <div className="content">{bannerData.title}</div>
                </div>
              </SwiperSlide>
            ))
          : <LoadingComponent />}
      </Swiper>
    </div>
  );
};

export default BannerComponent;

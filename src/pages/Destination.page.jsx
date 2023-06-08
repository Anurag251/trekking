import { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import { AllDataContext } from "../context/AllData.context";
import { Link, useLocation } from "react-router-dom";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";
import BigCardComponent from "../components/Cards/BigCard.component";
import LoadingComponent from "../components/Loading.component";

const DestinationPage = () => {
  const { galleryDatas, countryDatas, tripDatas } = useContext(AllDataContext);

  const [toggle, setToggle] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);

  const loaction = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
    setCurrentId(loaction.pathname.split("/")[3]);
    setCurrentName(loaction.pathname.split("/")[2]);
  }, [loaction]);

  return (
    <div className="destination-page">
      <section>
        <div className="wrapper">
          <div className="recommended-for-you">
            <SectionTitleComponent title="Packages">
              {currentName} Package Tour
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
                    .filter(
                      (data) => data.country.toLowerCase() === currentName
                    )
                    .map((tripData, idx) => (
                      <SwiperSlide key={idx}>
                        <BigCardComponent key={idx} cardData={tripData} />
                      </SwiperSlide>
                    ))
                : <LoadingComponent />}
            </Swiper>

            <div className="button-area">
              <Link to="/all-holiday-packages">
                <button className="view-all-button">View All</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color">
        <div className="wrapper">
          <div className="destination-details">
            <div className="switch-button">
              <button
                className={`button ${toggle ? "active" : ""}`}
                onClick={() => setToggle(false)}
              >
                About
              </button>
              <button
                className={`button ${!toggle ? "active" : ""}`}
                onClick={() => setToggle(true)}
              >
                Gallery
              </button>

              <div className={`indicator ${toggle ? "active" : ""}`}></div>
            </div>
            <div className="content-and-gallery">
              {!toggle ? (
                countryDatas !== null ? (
                  countryDatas
                    .filter((data) => data.id == currentId)
                    .map((data, idx) => (
                      <div className="content-section" key={idx}>
                        <p className="desc">{data.description}</p>
                        <div className="image">
                          <img src={data.icon} alt="package-image" />
                        </div>
                      </div>
                    ))
                ) : null
              ) : (
                <div className="gallery-section">
                  <div className="gallery-image-list">
                    {galleryDatas !== null
                      ? galleryDatas.map((image, idx) => (
                          <div className="image" key={idx}>
                            <img
                              src={image.original_image}
                              alt="gallery-image"
                            />
                          </div>
                        ))
                      : <LoadingComponent />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;

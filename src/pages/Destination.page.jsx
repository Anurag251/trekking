import { useContext, useEffect, useState } from "react";
import RecommendedForYouComponent from "../components/RecommendedForYou/RecommendedForYou.component";

import image1 from "../assets/images/about-img2.jpg";
import { AllDataContext } from "../context/AllData.context";
import { useLocation } from "react-router-dom";

const DestinationPage = () => {
  const { galleryDatas, countryDatas } = useContext(AllDataContext);

  const [toggle, setToggle] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const loaction = useLocation();

  console.log(countryDatas);

  useEffect(() => {
    window.scroll(0, 0);
    setCurrentId(loaction.pathname.split("/")[3]);
  }, [loaction]);

  console.log(currentId)

  return (
    <div className="destination-page">
      <section>
        <div className="wrapper">
          <RecommendedForYouComponent />
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
                      : "Loading..."}
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

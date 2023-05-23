import { useContext, useEffect, useState } from "react";
import { IconsStars } from "../components/Icons.component";
import PackageDetailComponent from "../components/PackageDetail/PackageDetail.component";
import YouMightAlsoLikeComponent from "../components/YouMightAlsoLike/YouMightAlsoLike.component";
import { useLocation } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const PackageDetailsPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const { tripDatas } = useContext(AllDataContext);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // console.log(location.pathname.split('/')[2])
  // console.log(location);

  useEffect(() => {
    if (tripDatas !== null) {
      tripDatas.forEach((tripData) => {
        if (tripData.id === location.state.id) {
          // console.log(categoriesData);
          setSelectedPackage(tripData);
        }
      });
    }
  }, [tripDatas, location]);

  return (
    <div className="Package-details-page">
      <div className="wrapper">
        <div className="title-area">
          <div className="Package-details-title">
            {selectedPackage !== null ? selectedPackage.title : ""}
          </div>

          <div className="pckage-rating">
            <span>Excellent</span>
            <IconsStars />
            <p>from 3 reviews</p>
          </div>
        </div>

        <PackageDetailComponent selectedPackage={selectedPackage} />

        <section>
          <YouMightAlsoLikeComponent />
        </section>
      </div>
    </div>
  );
};

export default PackageDetailsPage;

import { useEffect } from "react";
import { IconsStars } from "../components/Icons.component";
import PackageDetailComponent from "../components/PackageDetail/PackageDetail.component";
import YouMightAlsoLikeComponent from "../components/YouMightAlsoLike/YouMightAlsoLike.component";

const PackageDetailsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="Package-details-page">
      <div className="wrapper">
        <div className="title-area">
          <div className="Package-details-title">
            Annapurna Base Camp Helicopter Tour
          </div>

          <div className="pckage-rating">
            <span>Excellent</span>
            <IconsStars />
            <p>from 3 reviews</p>
          </div>
        </div>

        <PackageDetailComponent />

        <section>
          <YouMightAlsoLikeComponent />
        </section>
      </div>
    </div>
  );
};

export default PackageDetailsPage;

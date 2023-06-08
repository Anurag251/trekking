import { useContext, useEffect, useState } from "react";
import { IconsStars } from "../components/Icons.component";
import PackageDetailComponent from "../components/PackageDetail/PackageDetail.component";
import YouMightAlsoLikeComponent from "../components/YouMightAlsoLike/YouMightAlsoLike.component";
import { useLocation } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const PackageDetailsPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const { tripDatas } = useContext(AllDataContext);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (tripDatas !== null) {
      tripDatas.forEach((data) => {
        if (data.id == location.pathname.split("/")[2]) {
          // console.log(data);
          setSelectedPackage(data);
        }
      });
    }
  }, [tripDatas, location]);


  // useEffect(() => {
  //   if (tripDatas !== null) {
  //     tripDatas.forEach((tripData) => {
  //       if (tripData.id === location.state.id) {
  //         // console.log(categoriesData);
  //         setSelectedPackage(tripData);
  //       }
  //     });
  //   }
  // }, [tripDatas, location]);

  return (
    <div className="Package-details-page">
      <div className="wrapper">
        <div className="title-area">
          <div className="Package-details-title">
            {selectedPackage !== null ? selectedPackage.title : ""}
          </div>

          <div className="share-package">
            <h4 className="share-package-title">Share This Package</h4>
            <ul>
              <li>
                <FacebookShareButton
                  url={`https://www.mountaingotrekking.com${location.pathname}`}
                  quote={selectedPackage && selectedPackage.title}
                >
                  <FacebookIcon />
                </FacebookShareButton>
              </li>

              <li>
                <WhatsappShareButton
                  url={`https://www.mountaingotrekking.com${location.pathname}`}
                  title={selectedPackage && selectedPackage.title}
                >
                  <WhatsappIcon />
                </WhatsappShareButton>
              </li>

              {/*  <li>
                <InstapaperShareButton
                  url={`https://www.mountaingotrekking.com${location.pathname}`}
                  title={selectedPackage && selectedPackage.title}
                >
                  <InstapaperIcon />
                </InstapaperShareButton>
              </li> */}

              <li>
                <TwitterShareButton
                  url={`https://www.mountaingotrekking.com${location.pathname}`}
                  title={selectedPackage && selectedPackage.title}
                >
                  <TwitterIcon />
                </TwitterShareButton>
              </li>
            </ul>
          </div>
        </div>

        <PackageDetailComponent selectedPackage={selectedPackage} />

        <section>
          <YouMightAlsoLikeComponent />
        </section>
      </div>
      <script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0"
        nonce="YOUR_NONCE_VALUE"
      ></script>
    </div>
  );
};

export default PackageDetailsPage;

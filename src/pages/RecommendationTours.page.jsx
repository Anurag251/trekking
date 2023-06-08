/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";
import BigCardComponent from "../components/Cards/BigCard.component";
import { AllDataContext } from "../context/AllData.context";
import LoadingComponent from "../components/Loading.component";

const RecommendationToursPage = () => {
  const { tripDatas } = useContext(AllDataContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="recommendation-tours-page">
      <section>
        <div className="recommendation-tours">
          <div className="wrapper">
            <SectionTitleComponent title="Packages">
              Nepal's Holiday Packages
            </SectionTitleComponent>

            <div className="tours-list">
              {tripDatas !== null
                ? tripDatas
                    .filter((data) => data.country === "Nepal")
                    .map((tripData, idx) => (
                      <BigCardComponent key={idx} cardData={tripData} />
                    ))
                : <LoadingComponent />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommendationToursPage;

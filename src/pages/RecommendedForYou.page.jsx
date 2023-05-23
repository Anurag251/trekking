/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import CardComponent from "../components/Cards/Card.component";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";
import { AllDataContext } from "../context/AllData.context";

const RecommendedForYouPage = () => {
  const { countryDatas } = useContext(AllDataContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="recommended-for-you-page">
      <section>
        <div className="recommendation-tours">
          <div className="wrapper">
            <SectionTitleComponent title="Packages">
              Get inspired for your next trip!
            </SectionTitleComponent>

            <div className="all-package-list">
              {countryDatas !== null
                ? countryDatas.map((countryData, idx) => (
                    <CardComponent key={idx} cardData={countryData} country />
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommendedForYouPage;

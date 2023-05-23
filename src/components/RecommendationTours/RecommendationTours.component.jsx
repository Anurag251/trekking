import { Link } from "react-router-dom";
import BigCardComponent from "../Cards/BigCard.component";
import CardComponent from "../Cards/Card.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const RecommendationToursComponent = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="recommendation-tours">
      <SectionTitleComponent title="Packages">
        Nepal's Holiday Packages
      </SectionTitleComponent>

      <div className="tours-list">
        {/* <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent /> */}
        {tripDatas !== null
          ? tripDatas.map((tripData, idx) => (
              <BigCardComponent key={idx} cardData={tripData} />
            ))
          : "Loading..."}
      </div>

      <div className="button-area">
        <Link to="/all-holiday-packages">
          <button className="view-all-button">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendationToursComponent;

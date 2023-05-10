import BigCardComponent from "../Cards/BigCard.component";
import CardComponent from "../Cards/Card.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";

const RecommendationToursComponent = () => {
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
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
        <BigCardComponent />
      </div>

      <div className="button-area">
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default RecommendationToursComponent;

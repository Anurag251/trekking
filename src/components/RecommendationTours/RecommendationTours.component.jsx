import CardComponent from "../Cards/Card.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";

const RecommendationToursComponent = () => {
  return (
    <div className="recommendation-tours">
      <SectionTitleComponent title="Packages">
        Recommendation Tours
      </SectionTitleComponent>

      <div className="tours-list">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default RecommendationToursComponent;

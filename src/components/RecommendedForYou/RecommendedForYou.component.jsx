import BigCardComponent from "../Cards/BigCard.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";

const RecommendedForYouComponent = () => {
  return (
    <div className="recommended-for-you">
      <SectionTitleComponent title="Packages">
      Recommended for you!
      </SectionTitleComponent>

      <div className="recommended-list">
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
        <BigCardComponent />
        <BigCardComponent />
      </div>
    </div>
  );
};

export default RecommendedForYouComponent;

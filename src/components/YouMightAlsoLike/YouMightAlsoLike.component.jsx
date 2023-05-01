import BigCardComponent from "../Cards/BigCard.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";

const YouMightAlsoLikeComponent = () => {
  return (
    <div className="you-might-also-like">
      <SectionTitleComponent title="Packages">
        You might also like
      </SectionTitleComponent>

      <div className="like-list">
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

export default YouMightAlsoLikeComponent;

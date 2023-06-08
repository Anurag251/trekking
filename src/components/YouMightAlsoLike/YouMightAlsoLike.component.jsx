import { useContext } from "react";
import BigCardComponent from "../Cards/BigCard.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";
import { AllDataContext } from "../../context/AllData.context";
import LoadingComponent from "../Loading.component";

const YouMightAlsoLikeComponent = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="you-might-also-like">
      <SectionTitleComponent title="Packages">
        You might also like
      </SectionTitleComponent>

      <div className="like-list">
        {tripDatas !== null
          ? tripDatas
          .filter((data, idx) => idx <= 4)
          .map((tripData, idx) => (
              <BigCardComponent key={idx} cardData={tripData} />
            ))
          : <LoadingComponent />}
      </div>
    </div>
  );
};

export default YouMightAlsoLikeComponent;

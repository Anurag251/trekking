import { useContext, useEffect } from "react";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";
import { AllDataContext } from "../context/AllData.context";
import CardComponent from "../components/Cards/Card.component";
import LoadingComponent from "../components/Loading.component";

const TopDestinationsPage = () => {
  const { categoriesDatas } = useContext(AllDataContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="top-destinations-page">
      <section>
        <div className="wrapper">
          <SectionTitleComponent title="Packages">
            Create Your Custom Made Trip to Nepal
          </SectionTitleComponent>

          <div className="all-package-list">
            {categoriesDatas !== null
              ? categoriesDatas.map((categoriesData, idx) => (
                  <CardComponent key={idx} cardData={categoriesData} />
                ))
              : <LoadingComponent />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopDestinationsPage;

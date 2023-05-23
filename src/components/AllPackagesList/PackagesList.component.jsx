import { useContext, useEffect, useState } from "react";
import PackageListCardComponent from "../Cards/PackageListCard.component";
import { AllDataContext } from "../../context/AllData.context";
import { useLocation } from "react-router-dom";

const PackagesListComponent = () => {
  const location = useLocation();
  const state = location.state;

  const { categoriesDatas, selectedCate, filterPackage, setFilterPackage } = useContext(AllDataContext);

  const [selectedTrips, setSelectedTrips] = useState(null);

  useEffect(() => {
    if (categoriesDatas !== null) {
      categoriesDatas.forEach((data) => {
        if (selectedCate !== null) {
          if (selectedCate.id === data.id) {
            setSelectedTrips(data.trips);
            window.scroll(0, 230);
          }
        } else {
          if (state.cateData.id === data.id) {
            setSelectedTrips(data.trips);
          }
        }
      });
    }
  }, [state, categoriesDatas, selectedCate]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="all-packages-list">
      {selectedTrips !== null ? (
        <div className="package-title-area">
          <div className="package-list-title">
            {state && state.cateData.category_name}
          </div>

          <div className="packages-we-have">
            <div className="total-packages">
              Showing{" "}
              {selectedCate !== null
                ? selectedCate.trips.length
                : state && state.cateData.trips.length}{" "}
              Packages For You
            </div>

            <button className="filter-button" onClick={() => setFilterPackage(!filterPackage)}>
              Filter<i className="fas fa-filter"></i>
            </button>
          </div>
        </div>
      ) : (
        "Loading..."
      )}

      <div className="packages-list">
        {selectedTrips !== null
          ? selectedTrips.map((selectedTrip, idx) => (
              <div className="item" key={idx}>
                <PackageListCardComponent
                  cardData={selectedTrip}
                  cateData={state.cateData}
                />
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default PackagesListComponent;

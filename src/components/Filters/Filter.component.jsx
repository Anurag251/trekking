import { useContext } from "react";
import CategoriesFilterComponent from "./CategoriesFilter.component";
import { AllDataContext } from "../../context/AllData.context";
import LoadingComponent from "../Loading.component";

const FilterComponent = () => {
  const {
    categoriesDatas,
    selectedCate,
    setSelectedCate,
    filterPackage,
    setFilterPackage,
  } = useContext(AllDataContext);

  return (
    <div className={`filter-box ${filterPackage ? "active" : ""}`}>
      <div className="title-sec">
        <h3 className="filter-title">Filter</h3>

        <button className="fiter-close-button" onClick={() => setFilterPackage(false)}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* <div className="box-item">
        <CategoriesFilterComponent title="Filter">
          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Packages type
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Group Tour
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Fixed Tour
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Open Tour
            </label>
          </div>
        </CategoriesFilterComponent>
      </div> */}

      <div className="box-item">
        <CategoriesFilterComponent title="Categories">
          {categoriesDatas !== null
            ? categoriesDatas.map((categoriesData, idx) => (
                <div
                  className="checkbox-area"
                  key={idx}
                  onClick={() => {
                    setSelectedCate(categoriesData);
                  }}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={
                      selectedCate && categoriesData.id === selectedCate.id
                        ? true
                        : false
                    }
                    onChange={() => null}
                  />
                  <label htmlFor="" className="checkbox-label">
                    {categoriesData.category_name}
                  </label>
                </div>
              ))
            : <LoadingComponent />}
        </CategoriesFilterComponent>
      </div>
    </div>
  );
};

export default FilterComponent;

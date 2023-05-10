import CategoriesFilterComponent from "./CategoriesFilter.component";

const FilterComponent = () => {
  return (
    <div className="filter-box">
      <h3 className="filter-title">Filter</h3>

      <div className="box-item">
        <CategoriesFilterComponent title="Categories">
          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Holiday Packages
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Trekking & Adventure
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Peak Climbing
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              8000M Expedition
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Whiter Water Rafting
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Top Tending Adventure
            </label>
          </div>
        </CategoriesFilterComponent>

        <CategoriesFilterComponent title="Categories">
          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Holiday Packages
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Trekking & Adventure
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Peak Climbing
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              8000M Expedition
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Whiter Water Rafting
            </label>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="checkbox-label">
              Top Tending Adventure
            </label>
          </div>
        </CategoriesFilterComponent>
      </div>

      <div className="box-item">
        <CategoriesFilterComponent />
      </div>
    </div>
  );
};

export default FilterComponent;

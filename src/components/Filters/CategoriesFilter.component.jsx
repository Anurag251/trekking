/* eslint-disable react/prop-types */

const CategoriesFilterComponent = ({ title, children }) => {
  return (
    <div className="categories-filter">
      <div className="filter-box-title">{title}</div>

      <div className="filter-box-area">{children}</div>
    </div>
  );
};

export default CategoriesFilterComponent;

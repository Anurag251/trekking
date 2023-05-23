import { useEffect } from "react";
import PackagesListComponent from "../components/AllPackagesList/PackagesList.component";
import FilterComponent from "../components/Filters/Filter.component";

const PackageListPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="package-list-page">
      <div className="wrapper">
        <div className="package-layout">
          <FilterComponent />

          <PackagesListComponent />
        </div>
      </div>
    </div>
  );
};

export default PackageListPage;

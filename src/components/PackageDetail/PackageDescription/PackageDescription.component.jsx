import PackageDescriptionListComponent from "./PackageDescriptionList.component";
import PackageFeaturesComponent from "./PackageFeatures.component";

const PackageDescriptionComponent = () => {
  return (
    <div className="package-descriptions">
      <PackageFeaturesComponent />

      <PackageDescriptionListComponent />
    </div>
  );
};

export default PackageDescriptionComponent;

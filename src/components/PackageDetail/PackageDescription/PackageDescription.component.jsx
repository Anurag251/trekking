import PackageDescriptionListComponent from "./PackageDescriptionList.component";
import PackageFeaturesComponent from "./PackageFeatures.component";

const PackageDescriptionComponent = ({selectedPackage}) => {
  return (
    <div className="package-descriptions">
      <PackageFeaturesComponent />

      <PackageDescriptionListComponent selectedPackage={selectedPackage} />
    </div>
  );
};

export default PackageDescriptionComponent;

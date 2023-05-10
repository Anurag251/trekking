import PackageBookingDetails from "./PackageBookingDetails/PackageBookingDetails.component";
import PackageDescriptionComponent from "./PackageDescription/PackageDescription.component";
import PackageGalleryComponent from "./PackageGallery.component";

const PackageDetailComponent = () => {
  return (
    <div className="package-detail">
      <PackageGalleryComponent />

      <div className="package-detail-layout">
        <PackageDescriptionComponent />
        <PackageBookingDetails />
      </div>
    </div>
  );
};

export default PackageDetailComponent;

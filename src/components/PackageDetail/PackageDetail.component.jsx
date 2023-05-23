/* eslint-disable react/prop-types */
import PackageBookingDetails from "./PackageBookingDetails/PackageBookingDetails.component";
import PackageGalleryComponent from "./PackageGallery.component";

const PackageDetailComponent = ({ selectedPackage }) => {
  return (
    <div className="package-detail">
      <div className="package-detail-layout">
        <PackageGalleryComponent selectedPackage={selectedPackage} />

        <PackageBookingDetails selectedPackage={selectedPackage} />
      </div>
    </div>
  );
};

export default PackageDetailComponent;

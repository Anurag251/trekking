import PackageListCardComponent from "../Cards/PackageListCard.component";

const PackagesListComponent = () => {
  return (
    <div className="all-packages-list">
      <div className="package-title-area">
        <div className="package-list-title">Holiday Package</div>

        <div className="packages-we-have">
          <div className="total-packages">Showing 50 Packages For You</div>
        </div>
      </div>

      <div className="packages-list">
        <div className="item">
          <PackageListCardComponent />
        </div>
      </div>
    </div>
  );
};

export default PackagesListComponent;

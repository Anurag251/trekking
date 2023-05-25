/* eslint-disable react/prop-types */
const PackageFeaturesComponent = ({ selectedPackage }) => {
  return (
    <div className="package-features">
      <div className="list">
        <div className="item">
          <div className="icon">
            <i className="far fa-clock"></i>
          </div>
          <div className="content">
            <div className="name">Duration</div>
            <p>{selectedPackage && selectedPackage.duration}</p>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fa fa-shoe-prints"></i>
          </div>
          <div className="content">
            <div className="name">Tour Type</div>
            <p>{selectedPackage && selectedPackage.type}</p>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-mountain"></i>
          </div>
          <div className="content">
            <div className="name">Max. Altitude</div>
            <p> {selectedPackage && selectedPackage.elevation}</p>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-user-group"></i>
          </div>
          <div className="content">
            <div className="name">Group Size</div>
            <p>{selectedPackage && selectedPackage.groupsize}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageFeaturesComponent;

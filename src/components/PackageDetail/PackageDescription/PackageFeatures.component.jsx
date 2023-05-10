const PackageFeaturesComponent = () => {
  return (
    <div className="package-features">
      <div className="list">
        <div className="item">
          <div className="icon">
            <i className="far fa-clock"></i>
          </div>
          <div className="content">
            <div className="name">Duration</div>
            <p>14 night / 15 days</p>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fa fa-shoe-prints"></i>
          </div>
          <div className="content">
            <div className="name">Tour Type</div>
            <p>Tours/Trekking</p>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-mountain"></i>
          </div>
          <div className="content">
            <div className="name">Max. Altitude</div>
            <p> 45000 M</p>
          </div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-user-group"></i>
          </div>
          <div className="content">
            <div className="name">Group Size</div>
            <p>2- 18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageFeaturesComponent;

import { Link } from "react-router-dom";
import cardImage from "../../assets/images/card4.png";

const PackageListCardComponent = () => {
  return (
    <div className="package-list-card">
      <div className="item-body">
        <picture className="image-area">
          <img className="item-image" src={cardImage} alt="" />
        </picture>

        <div className="content">
          <div className="inner">
            <div className="infos">
              <Link to="/packages-detail">
                <div className="package-name">Annapurna Base Camp Trek</div>
              </Link>
              <div className="package-time">7 night / 8 days</div>
              <div className="package-cate">Standard</div>
              <div className="package-cate">Luxury</div>
            </div>

            <div className="package-price">
              <p>Starting from :</p>
              <span>US $ 9000.00</span>
            </div>
          </div>

          <div className="more-button">
            <button>More info</button>
          </div>
        </div>
      </div>

      <div className="item-footer">
        <div className="item">
          <div className="icon">
            <i className="fas fa-hotel"></i>
          </div>
          <div className="name">Hotel</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-utensils"></i>
          </div>
          <div className="name">Meals</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-jet-fighter-up"></i>
          </div>
          <div className="name">Flight</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fa-solid fa-binoculars"></i>
          </div>
          <div className="name">Sightseeing</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fa-solid fa-van-shuttle"></i>
          </div>
          <div className="name">Transportation</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-solid fa-address-card"></i>
          </div>
          <div className="name">Permit</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-user-tie"></i>
          </div>
          <div className="name">Guide/Porters</div>
        </div>
      </div>
    </div>
  );
};

export default PackageListCardComponent;

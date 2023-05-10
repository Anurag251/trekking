import ownerImage from "../../../assets/images/blog3.png";

const PackageBookingDetails = () => {
  return (
    <div className="package-booking-details">
      <div className="item">
        <div className="package-price">
          from <span>$100</span>
        </div>

        <div className="date">
          <label htmlFor="">Date</label>
          <input type="date" />
        </div>

        <div className="group">
          <div className="choose-package">
            <div className="name">Adults</div>
            <p>Over 18+</p>
          </div>

          <div className="button-group">
            <button>+</button>
            <div className="quantity">0</div>
            <button>-</button>
          </div>
        </div>

        <div className="group">
          <div className="choose-package">
            <div className="name">Adults</div>
            <p>Over 18+</p>
          </div>

          <div className="button-group">
            <button>+</button>
            <div className="quantity">0</div>
            <button>-</button>
          </div>
        </div>

        <div className="group">
          <div className="choose-package">
            <div className="name">Adults</div>
            <p>Over 18+</p>
          </div>

          <div className="button-group">
            <button>+</button>
            <div className="quantity">0</div>
            <button>-</button>
          </div>
        </div>

        <div className="book-now-button">
          <button>Book Now</button>
        </div>

        <p className="info">This tour allow minimum booking is 30 day(s)</p>
      </div>

      <div className="item">
        <div className="inner">
          <div className="title">Owner</div>

          <div className="owner">
            <img className="owner-image" src={ownerImage} alt="owner-image" />

            <div className="owner-info">
              <div className="name">nzan</div>
              <div className="since">Member Since 2023</div>
            </div>
          </div>

          <button className="question">Ask A Question</button>
        </div>
      </div>

      <div className="item">
        <div className="package-informaitons">
          <div className="title">Information Contact</div>

          <ul>
            <li>
              <span>Email</span>
              <p>mountaingotrekking@gmail.com</p>
            </li>

            <li>
              <span>Website</span>
              <p>www.mountaingotrekking.com</p>
            </li>

            <li>
              <span>Phone</span>
              <p>+9779841809067</p>
            </li>

            <li>
              <span>Fax</span>
              <p>+977-5158446</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackageBookingDetails;

import footerImage from "../assets/images/footerbg.jpg";

const FooterComponent = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerImage})` }}>
      <div className="wrapper">
        <div className="footer-content">
          <div className="item">
            <h4 className="footer-title">Company Logo</h4>

            <p>Mountain Go Trekking Nepal</p>
            <p>We are affiliated with: Government Logo, NTB Logo, TAAN, NMA</p>

            <h5>Connect with Us:</h5>

            <div className="social-links">
              <button className="icom">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button className="icom">
                <i className="fab fa-instagram"></i>
              </button>

              <button className="icom">
                <i className="fab fa-twitter"></i>
              </button>

              <button className="icom">
                <i className="fab fa-linkedin"></i>
              </button>
            </div>
          </div>

          <div className="item">
            <h4 className="footer-title">Our Activities</h4>

            <ul className="footer-activities-list">
              <li>Tour Package</li>
              <li>Trekking & Adventure</li>
              <li>Peak Climbing</li>
              <li>8000M Expedition</li>
              <li>White Water Rafting</li>
              <li>Top trending adventure</li>
            </ul>
          </div>

          <div className="item">
            <h4 className="footer-title">About</h4>

            <ul className="footer-about-list">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Testimonials</li>
              <li>Contact us</li>
              <li>Nepal Travels information</li>
            </ul>
          </div>

          <div className="item">
            <h4 className="footer-title">Contact us</h4>

            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Suryadarshan Height, Tokha Municipality 44600 Kathmandu, Nepal.
              </li>

              <li>
                <i className="fas fa-phone"></i>
                +977-01-5158446, 9849417708
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                info@mountaingotrekkiong.com
                <br /> mountaingotrekking@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © copyright 2010-2023. All Rights Reserved. Mountain Go Trekking &
          Expedition Pvt. Ltd
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

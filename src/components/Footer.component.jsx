import Government from "../assets/images/Government Logo.jpeg";
import NTB from "../assets/images/NTB Logo.jpeg";
import TAAN from "../assets/images/TAAN.png";
import NMA from "../assets/images/NMA.png";

import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-content">
          <div className="item">
            <h4 className="footer-title">Company Logo</h4>

            <p>Mountain Go Trekking Nepal</p>
            <p>We are affiliated with: Government Logo, NTB Logo, TAAN, NMA</p>

            <div className="logo-image-list">
              <img src={Government} alt="Government Logo" />
              <img src={NTB} alt="NTB Logo" />
              <img src={TAAN} alt="TAAN Logo" />
              <img src={NMA} alt="NMA Logo" />
            </div>

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
              <li>
                <Link to="/packages">Holidays Package</Link>
              </li>
              <li>
                <Link to="/packages">Trekking & Adventure</Link>
              </li>
              <li>
                <Link to="/packages">Peak Climbing</Link>
              </li>
              <li>
                <Link to="/packages">8000M Expedition</Link>
              </li>
              <li>
                <Link to="/packages">White Water Rafting</Link>
              </li>
              <li>
                <Link to="/packages">Top trending adventure</Link>
              </li>
            </ul>
          </div>

          <div className="item">
            <h4 className="footer-title">About</h4>

            <ul className="footer-about-list">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Testimonials</li>
              <li>Contact us</li>
              <li>Travels information</li>
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
                +977-1-5158446 | 9841809067
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                info@mountaingotrekking.com mountaingotrekking@gmail.com
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

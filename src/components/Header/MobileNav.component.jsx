import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import loagoImage from "../../assets/images/logo.png";
import { AllDataContext } from "../../context/AllData.context";

const MobileNavComponent = () => {
  const { sideNavHidden, setSideNavHidden, countryDatas } =
    useContext(AllDataContext);

  const [subNav, setSubNav] = useState(false);
  const [subNav1, setSubNav1] = useState(false);

  return (
    <div>
      <div className={`side-nav ${sideNavHidden ? "active" : ""}`}>
        <div
          className="side-nav-close-btn"
          onClick={() => setSideNavHidden(false)}
        >
          <i className="fas fa-arrow-left"></i>
        </div>

        <Link to="/">
          <div className="logo" onClick={() => setSideNavHidden(false)}>
            <img className="logo-img" src={loagoImage} alt="logo" />
            <h3>Mountain Go Trekking & Expedition Pvt. Ltd</h3>
          </div>
        </Link>

        <ul className="nav-links">
          <li className="link-area" onClick={() => setSideNavHidden(false)}>
            <Link to="/" className="navLinkBtn">
              <button className="nav-btn">Home</button>
            </Link>
          </li>

          <li className="link-area">
            <button className="nav-btn" onClick={() => setSubNav(!subNav)}>
              Company
            </button>

            <div className={`more-links ${subNav ? "active" : ""}`}>
              <ul>
                <li onClick={() => setSideNavHidden(false)}>
                  <Link to="/about" className="navLinkBtn">
                    <button>About Us</button>
                  </Link>
                </li>

                <li onClick={() => setSideNavHidden(false)}>
                  <Link to="/teams">
                    <button>Local Travel</button>
                  </Link>
                </li>

                <li onClick={() => setSideNavHidden(false)}>
                  <Link to="/testimonials">
                    <button>Testimonials</button>
                  </Link>
                </li>

                <li onClick={() => setSideNavHidden(false)}>
                  <Link to="/blog">
                    <button>Blog</button>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="link-area">
            <button className="nav-btn" onClick={() => setSubNav1(!subNav1)}>
              Destination
            </button>

            <div className={`more-links ${subNav1 ? "active" : ""}`}>
              <ul>
                {countryDatas !== null
                  ? countryDatas.map((countryData, idx) => (
                      <li key={idx} onClick={() => setSideNavHidden(false)}>
                        <Link
                          to={`/destination/${countryData.country_name.toLowerCase()}/${
                            countryData.id
                          }`}
                        >
                          <button>{countryData.country_name}</button>
                        </Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </li>

          <li className="link-area" onClick={() => setSideNavHidden(false)}>
            <Link to="/plan-your-trip">
              <button className="nav-btn">Plan Your Trip</button>
            </Link>
          </li>

          <li className="link-area" onClick={() => setSideNavHidden(false)}>
            <Link to="/contacts">
              <button className="nav-btn">Contact Us</button>
            </Link>
          </li>

          {/* <li className="link-area">
          <Link to="/">
            <button className="link-button">Pay Online</button>
          </Link>
        </li> */}

          {/* <li className="link-area">
          <Link to="/">
            <button className="link-button">
              <i className="fas fa-search"></i>
            </button>
          </Link>
        </li>

        <li className="link-area">
          <Link to="/">
            <button className="link-button">
              <i className="fas fa-user"></i>
            </button>
          </Link>
        </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavComponent;

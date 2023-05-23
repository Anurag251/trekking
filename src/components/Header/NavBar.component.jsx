import { Link } from "react-router-dom";

import logoImage from "../../assets/images/logo.png";
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const NavBarComponent = () => {
  const { countryDatas, sideNavHidden, setSideNavHidden } =
    useContext(AllDataContext);

  return (
    <nav className="nav-bar">
      <div className="wrapper">
        <Link to="/">
          <div className="logo">
            <img src={logoImage} alt="logo" />
            <h3>Mountain Go Trekking & Expedition Pvt. Ltd</h3>
          </div>
        </Link>

        <ul className="nav-links">
          <li className="link-area">
            <Link to="/">
              <button className="link-button">Home</button>
            </Link>
          </li>

          <li className="link-area">
            <button className="link-button">Company</button>

            <div className="more-links">
              <ul>
                <li>
                  <Link to="/about">
                    <button>About Us</button>
                  </Link>
                </li>

                <li>
                  <Link to="/teams">
                    <button>Local Travel</button>
                  </Link>
                </li>

                <li>
                  <Link to="/testimonials">
                    <button>Testimonials</button>
                  </Link>
                </li>

                <li>
                  <Link to="/blog">
                    <button>Blog</button>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="link-area">
            <button className="link-button">Destination</button>

            <div className="more-links">
              <ul>
                {countryDatas !== null
                  ? countryDatas.map((countryData, idx) => (
                      <li key={idx}>
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

          <li className="link-area">
            <Link to="/plan-your-trip">
              <button className="link-button">Plan Your Trip</button>
            </Link>
          </li>

          <li className="link-area">
            <Link to="/contacts">
              <button className="link-button">Contact Us</button>
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

        <div
          className="side-nav-btn"
          onClick={() => setSideNavHidden(!sideNavHidden)}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;

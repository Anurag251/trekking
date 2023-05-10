import { Link } from "react-router-dom";

import logoImage from "../../assets/images/logo.png";

const NavBarComponent = () => {
  return (
    <nav className="nav-bar">
      <div className="wrapper">
        <Link to="/">
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">
              <button className="link-button">Home</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">Company</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">Destination</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">Plan Your Trip</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">Contact Us</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">Pay Online</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">
                <i className="fas fa-search"></i>
              </button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">
                <i className="fas fa-user"></i>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponent;

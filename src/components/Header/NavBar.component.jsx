import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <nav className="nav-bar">
      <div className="wrapper">
        <div className="logo">
          <h1>LOGO</h1>
        </div>

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
              <button className="link-button">Destination Guides</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">Cabs</button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <button className="link-button">Our Hotels</button>
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

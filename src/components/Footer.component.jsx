import Government from "../assets/images/Government Logo single.jpeg";
import NTB from "../assets/images/NTB Logo.jpeg";
import TAAN from "../assets/images/TAAN.png";
import NMA from "../assets/images/NMA_new.jpeg";

import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const FooterComponent = () => {
  const { categoriesDatas, contactDatas } = useContext(AllDataContext);
  const navigate = useNavigate();

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-content">
          <div className="item">
            <h5>We are affiliated with:</h5>

            <div className="logo-image-list">
              <img src={Government} alt="Government Logo" />
              <img src={NTB} alt="Government Logo" />
              <img src={TAAN} alt="Government Logo" />
              <img src={NMA} alt="Government Logo" />
            </div>

            <h5>Connect with Us:</h5>

            <div className="social-links">
              {contactDatas && contactDatas.social_media.fb_url !== null ? (
                <a href={contactDatas.social_media.fb_url}>
                  <button className="icom">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </a>
              ) : null}

              {contactDatas && contactDatas.social_media.google_url !== null ? (
                <a href={contactDatas.social_media.google_url}>
                  <button className="icom">
                    <i className="fab fa-google"></i>
                  </button>
                </a>
              ) : null}

              {contactDatas &&
              contactDatas.social_media.instagram_url !== null ? (
                <a href={contactDatas.social_media.instagram_url}>
                  <button className="icom">
                    <i className="fab fa-instagram"></i>
                  </button>
                </a>
              ) : null}

              {contactDatas &&
              contactDatas.social_media.linkedin_url !== null ? (
                <a href={contactDatas.social_media.linkedin_url}>
                  <button className="icom">
                    <i className="fab fa-linkedin"></i>
                  </button>
                </a>
              ) : null}

              {contactDatas && contactDatas.social_media.fb_url !== null ? (
                <a href={contactDatas.social_media.fb_url}>
                  <button className="icom">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </a>
              ) : null}

              {contactDatas &&
              contactDatas.social_media.pinterest_url !== null ? (
                <a href={contactDatas.social_media.pinterest_url}>
                  <button className="icom">
                    <i className="fab fa-pinterest"></i>
                  </button>
                </a>
              ) : null}

              {contactDatas &&
              contactDatas.social_media.twitter_url !== null ? (
                <a href={contactDatas.social_media.twitter_url}>
                  <button className="icom">
                    <i className="fab fa-twitter"></i>
                  </button>
                </a>
              ) : null}

              {contactDatas &&
              contactDatas.social_media.youtube_url !== null ? (
                <a href={contactDatas.social_media.youtube_url}>
                  <button className="icom">
                    <i className="fab fa-youtube"></i>
                  </button>
                </a>
              ) : null}
            </div>
          </div>

          <div className="item">
            <h4 className="footer-title">Our Activities</h4>

            <ul className="footer-activities-list">
              {categoriesDatas &&
                categoriesDatas.map((data, idx) => (
                  <li key={idx}>
                    <div
                      className=""
                      onClick={() => {
                        navigate(`/packages/${data.id}`, {
                          state: {
                            cateData: data,
                          },
                        });
                      }}
                    >
                      {data.category_name}
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <div className="item">
            <h4 className="footer-title">About</h4>

            <ul className="footer-about-list">
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/"> Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/testimonials"> Testimonials</Link>
              </li>
              <li>
                <Link to="/contacts"> Contact us</Link>
              </li>
              <li>
                <Link to="/"> Travels information</Link>
              </li>
            </ul>
          </div>

          <div className="item">
            <h4 className="footer-title">Contact us</h4>

            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                {contactDatas && contactDatas.branding.address}
              </li>

              <li>
                <i className="fas fa-phone"></i>
                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  {contactDatas && contactDatas.branding.phone}
                </a>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <a
                  href={`mailto:${contactDatas && contactDatas.branding.email}`}
                >
                  {contactDatas && contactDatas.branding.email}
                </a>
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

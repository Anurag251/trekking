/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PackageListCardComponent = ({ cardData, cateData }) => {
  const [choosenPrice, setChoosenPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cardData !== null) {
      setChoosenPrice(cardData.price[0].value);
    }
  }, [cardData]);

  return (
    <div className="package-list-card">
      <div className="item-body">
        <picture
          className="image-area"
          onClick={() => {
            navigate(`/packages-detail/${cardData.id}`, {
              state: {
                id: cardData.id,
              },
            });
          }}
        >
          <img
            className="item-image"
            src={cardData.image !== null ? cardData.image.original_image : ""}
            alt="package-image"
          />
        </picture>

        <div className="content">
          <div className="inner">
            <div className="infos">
              <div
                className="package-name"
                onClick={() => {
                  navigate(`/packages-detail/${cardData.id}`, {
                    state: {
                      id: cardData.id,
                    },
                  });
                }}
              >
                {cardData.title}
              </div>
              <div className="package-time">{cardData.duration}</div>

              <div className="button-group">
                {cardData !== null
                  ? cardData.price.map((price, idx) => (
                      <button
                        className={`package-cate ${
                          price.value === choosenPrice ? "active" : ""
                        }`}
                        key={idx}
                        onClick={() => {
                          setChoosenPrice(price.value);
                        }}
                      >
                        {price.label}
                      </button>
                    ))
                  : null}
              </div>
            </div>

            <div className="package-price">
              <p>Starting from :</p>
              <span>US ${choosenPrice}</span>
            </div>
          </div>

          <div className="more-button">
            <button
              onClick={() => {
                navigate(`/packages-detail/${cardData.id}`, {
                  state: {
                    id: cardData.id,
                  },
                });
              }}
            >
              More info
            </button>
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

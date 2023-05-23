/* eslint-disable react/prop-types */
// import { IconsHeart, IconsStars, IconsUser } from "../Icons.component";
import { useNavigate } from "react-router-dom";

const BigCardComponent = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <>
      {cardData !== null}
      <div className="big-card">
        <div className="image-sec">
          <img
            className="item-image"
            src={cardData && cardData.image.original_image}
            alt=""
            onClick={() => {
              navigate(`/packages-detail/${cardData.id}`, {
                state: {
                  id: cardData.id,
                },
              });
              window.scroll(0, 0);
            }}
          />
          {/* <div className="heart">
          <IconsHeart />
        </div> */}
        </div>

        <div className="content-area">
          <div
            className="name"
            onClick={() => {
              navigate(`/packages-detail/${cardData.id}`, {
                state: {
                  id: cardData.id,
                },
              });

              window.scroll(0, 0);
            }}
          >
            {cardData && cardData.title}
          </div>

          <br />

          {/*  <div className="user">
          <IconsUser />
        </div> */}

          {/*  <div className="rating">
          <div className="icon-star">
            <IconsStars />
          </div>
          5 (3 Reviews)
        </div> */}

          <div className="item-footer">
            <div className="price">
              From <strong>${cardData.price[0].value}</strong>
            </div>

            <div className="days">{cardData.duration}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCardComponent;

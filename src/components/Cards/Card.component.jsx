/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const CardComponent = ({ cardData, blogCard, country }) => {
  const navigate = useNavigate();
  // console.log(cardData)

  return (
    <div
      className="preview-card"
      onClick={() => {
        if (blogCard) {
          navigate(`/blog-details/${cardData.id}`, {
            state: {
              id: cardData.id,
            },
          });
        } else if (country) {
          navigate(`/`);
        } else {
          navigate(`/packages/${cardData.id}`, {
            state: {
              cateData: cardData,
            },
          });
        }
      }}
    >
      <div className="image-box">
        {country ? (
          <img
            className="item-image"
            src={cardData.icon !== null ? cardData.icon : ""}
            alt="image"
          />
        ) : (
          <img
            className="item-image"
            src={cardData.image !== null ? cardData.image.big_image : ""}
            alt="image"
          />
        )}
      </div>

      {blogCard ? (
        <div className="name">{cardData.title}</div>
      ) : country ? (
        <div className="name">{cardData.country_name}</div>
      ) : (
        <div className="name">{cardData.category_name}</div>
      )}
    </div>
  );
};

export default CardComponent;

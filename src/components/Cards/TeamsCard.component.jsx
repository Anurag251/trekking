/* eslint-disable react/prop-types */
import cardImage from "../../assets/images/blog1.png";

const TeamsCardComponent = ({cardData}) => {
  return (
    <div className="preview-card teams-card">
      <div className="image-box">
        <img className="item-image" src={cardData.image !== null ? cardData.image : ''} alt="team-image" />
      </div>

      <h4 className="name">{cardData.name}</h4>
      <p className="desc">{cardData.designation}</p>
      <h5 className="role">Travel Consultant</h5>
    </div>
  );
};

export default TeamsCardComponent;

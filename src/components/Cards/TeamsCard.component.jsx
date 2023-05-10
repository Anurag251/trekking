import cardImage from "../../assets/images/blog1.png";

const TeamsCardComponent = () => {
  return (
    <div className="preview-card teams-card">
      <div className="image-box">
        <img className="item-image" src={cardImage} alt="destinations-image" />
      </div>

      <h4 className="name">Hari Prashad</h4>
      <p className="desc">Manages Sales</p>
      <h5 className="role">Travel Consultant</h5>
    </div>
  );
};

export default TeamsCardComponent;

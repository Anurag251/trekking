/* eslint-disable react/prop-types */

const TeamsCardComponent = ({ cardData }) => {
  return (
    <div className="preview-card teams-card">
      <div className="card-content">
        <div className="card-front">
          <div className="image-box">
            <img
              className="item-image"
              src={cardData.image !== null ? cardData.image : ""}
              alt="team-image"
            />
          </div>

          <h4 className="name">{cardData.name}</h4>
          <p className="desc"></p>
          <h5 className="role">{cardData.description}</h5>
        </div>

        <div className="card-back">
          <h4 className="name">{cardData.name}</h4>
          <h5 className="role">{cardData.description}</h5>
          <h5 className="role text-email"><i className="fas fa-envelope"></i> <p><a href={`mailto:${cardData.email}`}>{cardData.email}</a></p></h5>
          <h5 className="role"><i className="fas fa-phone"></i> <a href={`tel:${cardData.phone}`}>{cardData.phone}</a></h5>
        </div>
      </div>
    </div>
  );
};

export default TeamsCardComponent;

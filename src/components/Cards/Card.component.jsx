import cardImage from "../../assets/images/card1.jpg";

const CardComponent = () => {
  return (
    <div className="preview-card">
      <div className="image-box">
        <img className="item-image" src={cardImage} alt="destinations-image" />
      </div>

      <div className="name">Nepal Holiday Packages</div>
    </div>
  );
};

export default CardComponent;

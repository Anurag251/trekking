import { IconsHeart, IconsStars, IconsUser } from "../Icons.component";
import cardImage from "../../assets/images/card2.jpg";

const BigCardComponent = () => {
  return (
    <div className="big-card">
      <div className="image-sec">
        <img className="item-image" src={cardImage} alt="" />
        <div className="heart">
          <IconsHeart />
        </div>
      </div>

      <div className="content-area">
        <div className="name">Annapurna Base Camp Trek</div>

        <div className="user">
          <IconsUser />
        </div>

        <div className="rating">
          <div className="icon-star">
            <IconsStars />
          </div>
          5 (3 Reviews)
        </div>

        <div className="item-footer">
          <div className="price">
            From <strong>$100</strong>
          </div>

          <div className="days">14 night / 15 days</div>
        </div>
      </div>
    </div>
  );
};

export default BigCardComponent;

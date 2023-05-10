import SearchFilterBoxComponent from "./SearchFilterBox.component";
import bannerImage from "../../assets/images/banner2.jpeg";

const PageSearchBoxComponent = () => {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="wrapper">
        <SearchFilterBoxComponent />
      </div>


      
    </div>
  );
};

export default PageSearchBoxComponent;

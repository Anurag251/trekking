import packageImage from "../../assets/images/banner.jpg";

const PackageGalleryComponent = () => {
  return (
    <div className="package-gallery">
      <picture className="image-area">
        <img src={packageImage} alt="" />
      </picture>
    </div>
  );
};

export default PackageGalleryComponent;

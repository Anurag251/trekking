import CardComponent from "../Cards/Card.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";

const BlogComponent = () => {
  return (
    <div className="blog">
      <SectionTitleComponent title="Blog">
        Travel News and Blogs
      </SectionTitleComponent>

      <div className="blog-list">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>

      <div className="button-area">
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default BlogComponent;

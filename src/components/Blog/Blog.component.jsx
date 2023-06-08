import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";
import CardComponent from "../Cards/Card.component";
import SectionTitleComponent from "../Titles/SectionTitle.component";
import { Link } from "react-router-dom";
import LoadingComponent from "../Loading.component";

const BlogComponent = () => {
  const { blogDatas } = useContext(AllDataContext);

  return (
    <div className="blog">
      <SectionTitleComponent title="Blog">
        Travel News and Blogs
      </SectionTitleComponent>

      <div className="blog-list">
        {blogDatas !== null
          ? blogDatas.map((blogData, idx) => (
              <CardComponent key={idx} cardData={blogData} blogCard />
            ))
          :<LoadingComponent />}
      </div>

      <div className="button-area">
        <Link to="/blog">
          <button className="view-all-button">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;

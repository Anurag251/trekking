/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import CardComponent from "../components/Cards/Card.component";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";
import { AllDataContext } from "../context/AllData.context";
import LoadingComponent from "../components/Loading.component";

const BlogPage = () => {
  const { blogDatas } = useContext(AllDataContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="blog-page">
      <section>
        <div className="blog">
          <div className="wrapper">
            <SectionTitleComponent title="Packages">
              Travel News and Blogs
            </SectionTitleComponent>

            <div className="blog-list">
              {blogDatas !== null
                ? blogDatas.map((blogData, idx) => (
                    <CardComponent key={idx} cardData={blogData} blogCard />
                  ))
                : <LoadingComponent />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const BlogDetailsPage = () => {
  const { blogDatas } = useContext(AllDataContext);
  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();
  // console.log(location.state.id);

  useEffect(() => {
    if (blogDatas !== null) {
      blogDatas.forEach((blogData) => {
        if (location.state.id === blogData.id) {
          setSelectedData(blogData);
        }
      });
    }
  }, [blogDatas, location]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="blog-details-page">
      <section>
        {selectedData !== null ? (
          <div className="wrapper">
            <div className="image">
              <img
                src={
                  selectedData !== null ? selectedData.image.original_image : ""
                }
                alt=""
              />
            </div>

            <h2 className="title">{selectedData.title}</h2>

            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: selectedData.content }}
            />
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default BlogDetailsPage;

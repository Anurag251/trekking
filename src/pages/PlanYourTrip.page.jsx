import { useContext, useEffect } from "react";
import aboutImage from "../assets/images/about-img2.jpg";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";
import { AllDataContext } from "../context/AllData.context";

const PlanYourTrip = () => {
  const { aboutDetails } = useContext(AllDataContext);

  // console.log(aboutDetails)

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section>
        <div className="wrapper">
          <SectionTitleComponent title="Packages">
            Plan Your Trip
          </SectionTitleComponent>

          <div className="image-sec">
            {aboutDetails && aboutDetails.image !== null ? (
              <img
                src={aboutDetails[0].image.original_image}
                alt="aboutImage"
              />
            ) : null}
          </div>
          <article className="about-desc">
            <p
              dangerouslySetInnerHTML={{
                __html:
                  aboutDetails !== null ? aboutDetails[0].description : null,
              }}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTrip;

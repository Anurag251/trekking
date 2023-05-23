import { useEffect } from "react";
import aboutImage from "../assets/images/about-img2.jpg";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";

const PlanYourTrip = () => {
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
            <img src={aboutImage} alt="aboutImage" />
          </div>
          <article className="about-desc">
            <p>
              Overland Escape was established in August 1999 and now is one of
              the leading travel companies responsible for marketing Ladakh
              worldwide and India as well, thereby contributing in a positive
              way in developing economy of Ladakh. In order to ensure that
              Ladakh is marketed in an inspirational and relevant way we have
              been working vigorously with our partners both in India and
              overseas. Ever since its inception, Overland Escape has cultivated
              the friendship and cooperation in the field of travel related
              services with its valuable clients. We offer custom-made tour
              packages of India, Nepal, Bhutan and Tibet at competitive prices
              and have established ourselves as a travel company with
              interesting inbound and outbound tour itineraries. We are backed
              up by a quality management system.
              <br />
              <br />
              We at Overland believe in protecting the character of the
              destination we work on i.e. preserving the different cultures and
              traditions around us which inspires us to remain passionate about
              travelling and helping others to experience the destinations that
              we treasure. Protecting the natural environment through the
              promotion and support of various conservation efforts is also our
              priority. One of the initiatives of Overland in this field is the
              annual garbage cleaning trek which is held every year around
              September.
              <br />
              <br />
              Training and employing local personnel is what we believe in, thus
              enhancing the dimension of your visit and supporting the economy
              of the local communities. We are also a reliable partner aiming to
              help improve the efficiency, productivity, standing and success of
              our esteemed customers.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PlanYourTrip;

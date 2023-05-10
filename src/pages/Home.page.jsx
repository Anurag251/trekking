import { useEffect } from "react";
import BannerComponent from "../components/Banner.component";
import BlogComponent from "../components/Blog/Blog.component";
import OurTeamsComponent from "../components/OurTeams/OurTeams.component";
import RecommendationToursComponent from "../components/RecommendationTours/RecommendationTours.component";
import RecommendedForYouComponent from "../components/RecommendedForYou/RecommendedForYou.component";
import SearchFilterBoxComponent from "../components/SearchFilter/SearchFilterBox.component";
import TestimonialsComponent from "../components/Testimonials/Testimonials.component";
import TopDestinationsComponent from "../components/TopDestinations/TopDestinations.component";
// import YouMightAlsoLikeComponent from "../components/YouMightAlsoLike/YouMightAlsoLike.component";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="home-page">
      <BannerComponent />

      <div className="wrapper">
        <SearchFilterBoxComponent />
      </div>

      <section className="bg-color">
        <div className="wrapper">
          <TopDestinationsComponent />
        </div>
      </section>

      <section>
        <div className="wrapper">
          <RecommendationToursComponent />
        </div>
      </section>

      <section className="bg-color">
        <div className="wrapper">
          <RecommendedForYouComponent />
        </div>
      </section>

      {/* <section>
        <div className="wrapper">
          <YouMightAlsoLikeComponent />
        </div>
      </section> */}

      <section>
        <div className="wrapper">
          <TestimonialsComponent />
        </div>
      </section>

      <section className="bg-color">
        <div className="wrapper">
          <BlogComponent />
        </div>
      </section>

      <section>
        <div className="wrapper">
          <OurTeamsComponent />
        </div>
      </section>
    </div>
  );
};

export default HomePage;

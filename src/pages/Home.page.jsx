import BannerComponent from "../components/Banner.component";
import BlogComponent from "../components/Blog/Blog.component";
import RecommendationToursComponent from "../components/RecommendationTours/RecommendationTours.component";
import RecommendedForYouComponent from "../components/RecommendedForYou/RecommendedForYou.component";
import SearchFilterBoxComponent from "../components/SearchFilter/SearchFilterBox.component";
import TestimonialsComponent from "../components/Testimonials/Testimonials.component";
import TopDestinationsComponent from "../components/TopDestinations/TopDestinations.component";
import YouMightAlsoLikeComponent from "../components/YouMightAlsoLike/YouMightAlsoLike.component";

const HomePage = () => {
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

      <section>
        <div className="wrapper">
          <YouMightAlsoLikeComponent />
        </div>
      </section>

      <section className="bg-color">
        <div className="wrapper">
          <TestimonialsComponent />
        </div>
      </section>

      <section>
        <div className="wrapper">
          <BlogComponent />
        </div>
      </section>
    </div>
  );
};

export default HomePage;

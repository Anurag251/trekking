import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.page";
import HeaderComponent from "./components/Header/header.component";
import "./assets/styles/main.sass";
import FooterComponent from "./components/Footer.component";
import PackageListPage from "./pages/PackageList.page";
import PackageDetailsPage from "./pages/PackageDetails.page";
import TopDestinationsPage from "./pages/TopDestinations.page";
import RecommendationToursPage from "./pages/RecommendationTours.page";
import RecommendedForYouPage from "./pages/RecommendedForYou.page";
import BlogPage from "./pages/Blog.page";
import TeamPage from "./pages/Team.page";
import TestimonialsPage from "./pages/Testimonials.page";
import AboutPage from "./pages/About.page";
import PlanYourTrip from "./pages/PlanYourTrip.page";
import ContactPage from "./pages/Contact.page";
import DestinationPage from "./pages/Destination.page";
import PageSearchBoxComponent from "./components/SearchFilter/PageSearchBox.component";
import LoadingComponent from "./components/Loading.component";
import React, { useContext, useEffect } from "react";
import { AllDataContext } from "./context/AllData.context";
import SearchedDataPage from "./pages/SearchedData.page";
import SuccessMessageComponent from "./components/SuccessMessage.component";
import BlogDetailsPage from "./pages/BlogDetails.page";
import MobileNavComponent from "./components/Header/MobileNav.component";

function App() {
  const location = useLocation();

  const { loading } = useContext(AllDataContext);

  // useEffect(() => {
  //   function googleTranslateElementInit() {
  //     new google.translate.TranslateElement(
  //       { pageLanguage: "en" },
  //       "google_translate_element"
  //     );
  //   }
  // }, []);

  return (
    <div className="app">
      {loading ? (
        <LoadingComponent />
      ) : (
        <React.Fragment>
          <HeaderComponent />
          <MobileNavComponent />

          {location.pathname !== "/" ? <PageSearchBoxComponent /> : null}

          <SuccessMessageComponent />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages/:id" element={<PackageListPage />} />
            <Route
              path="/packages-detail/:id"
              element={<PackageDetailsPage />}
            />
            <Route path="/all-trip" element={<TopDestinationsPage />} />
            <Route
              path="/all-holiday-packages"
              element={<RecommendationToursPage />}
            />
            <Route path="/all-next-trip" element={<RecommendedForYouPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/teams" element={<TeamPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/plan-your-trip" element={<PlanYourTrip />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route
              path="/destination/:name/:id"
              element={<DestinationPage />}
            />
            <Route path="/search" element={<SearchedDataPage />} />
            <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
          </Routes>

          <FooterComponent />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;

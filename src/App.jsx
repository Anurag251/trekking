import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import HeaderComponent from "./components/Header/header.component";
import "./assets/styles/main.sass";
import FooterComponent from "./components/Footer.component";
import PackageListPage from "./pages/PackageList.page";
import PackageDetailsPage from "./pages/PackageDetails.page";

function App() {
  return (
    <div className="app">
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackageListPage />} />
        <Route path="/packages-detail" element={<PackageDetailsPage />} />
        
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;

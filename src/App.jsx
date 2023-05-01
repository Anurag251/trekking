import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import HeaderComponent from "./components/Header/header.component";
import "./assets/styles/main.sass";
import FooterComponent from "./components/Footer.component";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;

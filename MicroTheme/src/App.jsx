import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import ItSolution from "./components/itSolution/ItSolution.jsx"
import Contact from "./components/Contact/Contact.jsx"
import TechAgency from "./components/TechAgency/TechAgency.jsx";
import StartupHome from "./components/StartupHome/StartupHome.jsx";
import ItConsulting from "./components/ItConsulting/ItConsulting.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import PortfolioGrid from "./components/Portfolio/PortfolioGrid/PortfolioGrid.jsx";
import Portfol from "./components/Portfolio/PortfolioM/PortfolioMasonry.jsx";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails/PortfolioDetails.jsx";
import PortfolioMasonry from "./components/Portfolio/PortfolioM/PortfolioMasonry.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/main-demo" element={<Home />} />
        {/* <Route path="/demos/it-solutions" element={<ItSolution />} /> */}
        <Route path="/demos/Tech-Agency" element={<TechAgency />} />
        <Route path="/demos/Startup-Home" element={<StartupHome/>} />
        <Route path="/demos/IT-Consulting" element={<ItConsulting/>} />
        <Route path="/Pages/About-Us" element={<AboutUs/>} />
        <Route path="/Portfolio/Portfolio-Grid" element={<PortfolioGrid/>} />
        <Route path="/Portfolio/Portfolio-Masonry" element={<PortfolioMasonry/>} />
        <Route path="/Portfolio/Portfolio-Details" element={<PortfolioDetails/>} />
        <Route path="/Blog/Blog" element={<AboutUs/>} />
        <Route path="/Blog/Blog-Grid" element={<AboutUs/>} />
        <Route path="/Blog/Blog-Details" element={<AboutUs/>} />
    
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;

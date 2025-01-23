import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import ItSolution from "./components/itSolution/ItSolution.jsx"
import Contact from "./components/Contact/Contact.jsx"
import TechAgency from "./components/TechAgency/TechAgency.jsx";
import StartupHome from "./components/StartupHome/StartupHome.jsx";
import ItConsulting from "./components/ItConsulting/ItConsulting.jsx";


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
    
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;

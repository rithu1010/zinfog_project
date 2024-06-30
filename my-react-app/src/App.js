import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";
import LoginPage from "./LoginPage/index";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
// import Pricing from "./pages/Pricing";
// import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        {/* <LoginPage /> */}
        {/* <LandingPage /> */}
        <Route path="" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/blog" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

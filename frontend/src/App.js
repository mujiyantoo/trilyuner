import React from "react";
import "./App.css";
import "./styles/portfolios.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sparkles } from 'lucide-react';

// Portfolio Components
import LandingPage from "./components/portfolios/LandingPage";
import BentoGrid from "./components/portfolios/BentoGrid";
import KineticTypography from "./components/portfolios/KineticTypography";
import OrganicShapes from "./components/portfolios/OrganicShapes";
import Glassmorphism from "./components/portfolios/Glassmorphism";
import DarkMode from "./components/portfolios/DarkMode";
import Immersive3D from "./components/portfolios/Immersive3D";
import ScrollStorytelling from "./components/portfolios/ScrollStorytelling";
import HandDrawn from "./components/portfolios/HandDrawn";
import MicroInteractions from "./components/portfolios/MicroInteractions";

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Landing Page - Showcase all 9 concepts */}
            <Route path="/" element={<LandingPage />} />

            {/* Individual Portfolio Concepts */}
            <Route path="/bento-grid" element={<BentoGrid />} />
            <Route path="/kinetic-typography" element={<KineticTypography />} />
            <Route path="/organic-shapes" element={<OrganicShapes />} />
            <Route path="/glassmorphism" element={<Glassmorphism />} />
            <Route path="/dark-mode" element={<DarkMode />} />
            <Route path="/immersive-3d" element={<Immersive3D />} />
            <Route path="/scroll-storytelling" element={<ScrollStorytelling />} />
            <Route path="/hand-drawn" element={<HandDrawn />} />
            <Route path="/micro-interactions" element={<MicroInteractions />} />
          </Routes>
        </BrowserRouter>
      </div>
      );
}

      export default App;

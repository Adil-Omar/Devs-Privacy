import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./pages/Privacy";
import Privacy2 from "./pages/Privacy2"; // create this new page
import Privacy3 from "./pages/Privacy3";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Privacy />} />

        {/* Second page */}
        <Route path="/AI-Photo-Enhancer" element={<Privacy2 />} />
        <Route path="/NovaChat-AI" element={<Privacy3 />} />
      </Routes>
    </Router>
  );
}

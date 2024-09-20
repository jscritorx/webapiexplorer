
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiDetails from "./components/ApiDetails";
import HomePage from "./pages/Homepage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:api" element={<ApiDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

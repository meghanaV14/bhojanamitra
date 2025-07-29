import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import Search from "./components/Search";
import Recipe from "./components/Recipe";
import ThankYou from "./components/ThankYou";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirecting to /welcome */}
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />


        {/* Page routes */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;

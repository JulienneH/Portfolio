// src/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SinglePage />} />
    </Routes>
  );
}

export default AppRouter;

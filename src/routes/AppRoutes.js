import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ResignationPage from "../pages/ResignationPage";
import HRDashboardPage from "../pages/HRDashboardPage";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/submit-resignation" element={<ResignationPage />} />
      
      <Route path="/hr-dashboard" element={
        <ProtectedRoute>
          <HRDashboardPage />
        </ProtectedRoute>
      } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    return token && role === "HR" ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

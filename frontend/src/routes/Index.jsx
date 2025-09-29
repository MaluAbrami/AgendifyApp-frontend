import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import Services from "../pages/ServicesPage/ServicesPage";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/HomePage";
import AppointmentsPage from "../pages/AppointmentsPage/AppointmentsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AvailableServicesPage from "../pages/AvailableServicesPage/AvailableServicesPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import Logout from "./Logout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute>
            <AppointmentsPage />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path="/available-services" element={
          <ProtectedRoute>
            <AvailableServicesPage />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        } />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
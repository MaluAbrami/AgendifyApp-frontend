import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import Services from "../pages/ServicesPage/ServicesPage";
import Home from "../pages/Home/HomePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
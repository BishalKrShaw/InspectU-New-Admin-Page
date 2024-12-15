import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css"
import Admin from "./components/admin/Admin";
import AdminDashboardLayout from "./components/admin/AdminDashboardLayout";
import Dashboard from "./components/admin/Dashboard";
import Overview from "./components/admin/Overview";
import SMELayout from "./components/sme/SMELayout";
import CreateExam from "./components/sme/CreateExam";
import SME from "./components/sme/SME";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="overview" element={<Overview />} />
        </Route>
        <Route path="/sme" element={<SME />} />
        <Route path="/sme" element={<SMELayout />}>
          <Route path="create-exam" element={<CreateExam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

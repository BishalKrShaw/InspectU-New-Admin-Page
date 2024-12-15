import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminDashboardLayout.css";

const AdminDashboardLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <p className="logo">InspectU</p>
        <nav>
          <NavLink to="/admin/dashboard" className="nav-link">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </NavLink>
          <NavLink to="/admin/overview" className="nav-link">
            <span className="material-symbols-outlined">overview</span>
            Overview
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet /> {/* This will render the content based on the route */}
      </main>
    </div>
  );
};

export default AdminDashboardLayout;

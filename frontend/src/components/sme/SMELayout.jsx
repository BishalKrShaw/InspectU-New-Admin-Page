import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./SMELayout.css";

const SMELayout = () => {
  return (
    <div className="sme-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <p className="logo">InspectU</p>
        <nav>
          <NavLink to="/sme/create-exam" className="nav-link">
            <span className="material-symbols-outlined">add_circle</span>
            Create Exam
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

export default SMELayout;

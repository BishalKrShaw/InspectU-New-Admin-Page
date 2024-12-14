// Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import Highlights from "./Highlights";

const Dashboard = () => {
  return (
    <>
      <div id="admin-nav">
        <h1>Dashboard</h1>
        <div id="admin-profile">
          <div className="admin-img-div">
            <img src="/profile.jpg" alt="" />
          </div>
          <div className="admin-text-div">
            <p id="username">Bishal</p>
            <p id="role">admin</p>
          </div>
        </div>
      </div>
      {/* Overview */}
      <setion id="overview-div">
        <Highlights icon="group" text="Live Users"/>
        <Highlights icon="warning" text="Live Alerts"/>
        <Highlights icon="assignment" text="Total Exam Conducted"/>
        <Highlights icon="insert_chart" text="Reports"/>
      </setion>

      {/* list-graphs */}
      <section id="list-graphs-div">
        <div id="list"></div>
        <div id="graphs"></div>
      </section>
    </>
  );
};

export default Dashboard;

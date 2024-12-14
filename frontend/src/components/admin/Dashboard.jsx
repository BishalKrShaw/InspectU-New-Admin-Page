// Dashboard.jsx
import React from "react";
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <>
      {/* Overview */}
      <setion id="overview-div">
        <div className="overview"></div>
        <div className="overview"></div>
        <div className="overview"></div>
        <div className="overview"></div>
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

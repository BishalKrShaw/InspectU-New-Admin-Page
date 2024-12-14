// Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import Highlights from "./Highlights";
import LiveUserList from "./LiveUserContainer";
import ExamChart from "./ExamChart";

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
        <Highlights icon="group" text="Live Users" />
        <Highlights icon="warning" text="Live Alerts" style={{ background: 'linear-gradient(to right, #ff6b6b, #ffa726)'}} />
        <Highlights icon="assignment" text="Total Exam Conducted" style={{ background: "linear-gradient(to right, #4caf50, #ffeb3b)", color: "white" }} />
        <Highlights icon="insert_chart" text="Reports" style={{ background: "linear-gradient(to right, #2196f3, #9c27b0)"}} />
      </setion>

      {/* list-graphs */}
      <section id="list-graphs-div">
        <div id="list">
          <LiveUserList />
        </div>
        <div id="graphs">
          <ExamChart/>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

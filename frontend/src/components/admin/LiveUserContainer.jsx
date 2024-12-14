import React from "react";
import "./LiveUserContainer.css";
import LiveUserList from "./LiveUserList";

function LiveUserContainer() {
  return (
    <div className="all-users-container">
      {/* Search bar */}
      <div id="searchbar">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search by Employee ID" />
      </div>

      {/* Stats Headings */}
      <div className="stats-headings">
        <div className="number" style={{ width: "10%" }}>
          No.
        </div>
        <div className="name" style={{ width: "30%" }}>
          Name
        </div>
        <div className="employee-id" style={{ width: "20%" }}>
          Employee ID
        </div>
        <div className="role" style={{ width: "20%" }}>
          Role
        </div>
        <div className="alert" style={{ width: "20%" }}>
          Alert
        </div>
      </div>

      {/* Scrollable list of users */}
      <div className="scrollable-list">
        <LiveUserList />
        <LiveUserList />
        <LiveUserList />
        <LiveUserList />
        <LiveUserList />
        <LiveUserList />
        <LiveUserList />
        <LiveUserList />
        {/* Add more LiveUserList components as needed */}
      </div>
    </div>
  );
}

export default LiveUserContainer;

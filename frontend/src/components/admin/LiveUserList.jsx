import React from "react";
import "./LiveUserList.css"

function LiveUserList() {
  return (
    <>
      <div className="employees-stats">
        <div className="number" style={{ width: "10%" }}>
          1
        </div>
        <div className="name" style={{ width: "30%" }}>
          Bishal Kumar Shaw
        </div>
        <div className="employee-id" style={{ width: "20%" }}>
          2721489
        </div>
        <div className="role" style={{ width: "20%" }}>
          Innovator
        </div>
        <div className="alert" style={{ width: "20%" }}>
          <span>Good</span>
        </div>
      </div>
    </>
  );
}

export default LiveUserList;

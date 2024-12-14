import React from "react";
import "./Highlights.css";

function Highlights({icon, text, style}) {
  return (
    <>
      <div className="overview" id="highlight">
        <div id="highlight-icon" style={{...style}}>
          <span class="material-symbols-outlined">{icon}</span>
        </div>
        <div id="highlight-text">
          <p>{text}</p>
          <span>256</span>
        </div>
      </div>
    </>
  );
}

export default Highlights;

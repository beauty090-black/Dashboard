import React from "react";
import "../styles/ProgressCircle.css"

const ProgressCircle = ({ value }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-circle">
        <div className="progress-inner">
          <span className="progress-value">{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
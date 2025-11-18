import React from "react";
import "../styles/Mentorcard.css";

export default function MentorCard({ name, role }){
  return (
    <div className="mentor-card">
      <div className="mentor-left">
        <img src="/src/assets/avatar-2 . svg" alt={name} />
        <div>
          <div className="mentor-name">{name}</div>
          <div className="mentor-role">{role}</div>
        </div>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  );
}
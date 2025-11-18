import React from "react";
import "../styles/Coursecard.css";

export default function CourseCard({ tag, title, mentor }){
  return (
    <article className="course-card">
      <div className="card-thumb" aria-hidden></div>
      <div style={{marginTop:10}}>
        <div className="course-tag">{tag}</div>
      </div>

      <h3 className="course-title">{title}</h3>

      <div className="course-meta row" style={{marginTop:12}}>
        <div className="mentor">
          <img src="/src/assets/avatar-2 . svg" alt="mentor" />
          <div>
            <div className="mentor-name">{mentor}</div>
            <div className="mentor-role">Mentor</div>
          </div>
        </div>

        <div className="progress" aria-hidden>
          <div className="progress-bar"><div style={{width:"48%"}}></div></div>
        </div>
      </div>
    </article>
  );
}
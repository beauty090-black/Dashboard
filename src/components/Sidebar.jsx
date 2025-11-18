import React from "react";
import "../styles/Sidebar.css";

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-title">Coursue</div>

        <ul className="sidebar-menu">
          <li>🏠 Dashboard</li>
          <li>📥 Inbox</li>
          <li>📘 Lesson</li>
          <li>🗂 Task</li>
          <li>👥 Group</li>
        </ul>

        <div style={{marginTop:20}}>
          <div style={{fontSize:13, color:"var(--muted)", fontWeight:700}}>Friends</div>
          <div className="friend-list">
            <div className="friend">
              <img src="/src/assets/avatar-1 . svg" alt="f"/>
              <div>
                <div className="friend-name">Bagas Mahpie</div>
                <div className="friend-role">Friend</div>
              </div>
            </div>
            <div className="friend">
              <img src="/src/assets/avatar-2 . svg" alt="f"/>
              <div>
                <div className="friend-name">Sir Dandy</div>
                <div className="friend-role">Old Friend</div>
              </div>
            </div>
            <div className="friend">
              <img src="/src/assets/avatar-3 . svg" alt="f"/>
              <div>
                <div className="friend-name">Jhon Tosan</div>
                <div className="friend-role">Friend</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-footer">
        <div>⚙ Setting</div>
        <div style={{color:"#ef4444"}}>🚪 Logout</div>
      </div>
    </aside>
  );
}
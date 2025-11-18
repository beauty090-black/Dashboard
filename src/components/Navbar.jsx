import React from "react";
import "../styles/Navbar.css";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{opacity:0.7}}>
          <path d="M21 21l-4.35-4.35" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="11" cy="11" r="6" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input placeholder="Search your course..." />
      </div>

      <div className="nav-actions row">
        <button className="icon-btn">✉</button>
        <button className="icon-btn">🔔</button>
        <div className="profile row">
          <img src="/src/assets/avatar-1.svg" alt="me" />
          <div className="profile-name">Jason Ranti</div>
        </div>
      </div>
    </header>
  );
}
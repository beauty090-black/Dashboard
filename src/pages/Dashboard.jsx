import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import StatsCard from "../components/StatsCard";
import MentorCard from "../components/MentorCard";
import "../styles/Dashboard.css"

export default function Dashboard(){
  return (
    <div className="dashboard-container">
      <div className="dashboard-inner">
        <Sidebar />

        <main>
          <div style={{display:"flex", flexDirection:"column", gap:18}}>
            <Navbar />
            <section className="hero-banner">
              <div>
                <div className="overline">ONLINE COURSE</div>
                <h1 className="hero-title">Sharpen Your Skills with Professional Online Courses</h1>
                <p className="hero-sub">Practical, project-based lessons to level up fast.</p>
                <div style={{marginTop:14}}>
                  <button className="btn-primary">Join Now →</button>
                </div>
              </div>
              <div className="hero-illustration" aria-hidden>✦</div>
            </section>
            <section className="chips row">
              <div className="chip"><strong>2/8</strong>watched — UI/UX Design</div>
              <div className="chip"><strong>3/8</strong> watched — Branding</div>
              <div className="chip"><strong>6/12</strong> watched — Front End</div>
            </section>
            <section className="continue-section">
              <div className="section-head row" style={{justifyContent:"space-between"}}>
                <div className="section-title">Continue Watching</div>
                <div className="see-all">See all→</div>
              </div>

              <div className="course-grid">
                <CourseCard
                  tag="Front End"
                  title="Beginner's Guide to Becoming a Professional Front-End Developer"
                  mentor="Leonardo Samsul"
                />
                <CourseCard
                  tag="UI/UX Design"
                  title="Optimizing User Experience with the Best UI/UX Design"
                  mentor="Bayu Salto"
                />
                <CourseCard
                  tag="Branding"
                  title="Reviving and Refreshing Company Image"
                  mentor="Padang Satrio"
                />
              </div>
            </section>
            <section className="your-lesson">
              <div className="section-title">Your Lesson</div>
              <div className="lesson-card">
                <div className="lesson-left">
                  <img src="/src/assets/avatar-1 . svg" alt="mentor" className="lesson-avatar"/>
                  <div>
                    <div className="lesson-mentor">Padhang Satrio</div>
                    <div className="lesson-date">2/16/2004</div>
                  </div>
                </div>
                <div className="lesson-desc">Understand Of UI/UX Design</div>
                <div className="lesson-action">⟶</div>
              </div>
            </section>

          </div>
        </main>

        <aside className="right-sidebar">
          <StatsCard />
          <div style={{marginTop:20}}>
            <div className="section-title">Your mentor</div>
            <div style={{marginTop:12}}>
              <MentorCard name="Padhang Satrio" role="Mentor" />
              <MentorCard name="Zakir Horizontal" role="Mentor" />
              <MentorCard name="Leonardo Samsul" role="Mentor" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
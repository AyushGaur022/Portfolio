import React from 'react'

export default function About() {
  return (
    <section id="about" className="reveal">
      <h3 className="section-title"><span className="num">01 &mdash;</span> About Me <span className="line"/></h3>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>Frontend Web Developer</strong> with 2+ years of experience building responsive, user-centric web and mobile applications using <strong>React.js</strong>, JavaScript (ES6+), HTML5, CSS3, and WordPress.
          </p>
          <p>
            Skilled in developing reusable UI components, integrating REST APIs, optimizing web performance, and delivering pixel-accurate designs. I've worked across agency, product, internship, and freelance environments — consistently shipping production-ready features on time.
          </p>
          <p>
            My goal is always the same: collaborate closely, solve problems efficiently, and deliver high-performance products that look great on every device.
          </p>
          <div className="about-links">
            <a href="mailto:ayushgaur022@gmail.com" className="about-link">
              <i className="fas fa-envelope"></i> ayushgaur022@gmail.com
            </a>
            <a href="https://linkedin.com/in/ayushgaur" target="_blank" rel="noreferrer" className="about-link">
              <i className="fab fa-linkedin"></i> linkedin.com/in/ayushgaur
            </a>
            <a href="https://github.com/AyushGaur022" target="_blank" rel="noreferrer" className="about-link">
              <i className="fab fa-github"></i> github.com/AyushGaur022
            </a>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-num">2+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">6</div>
            <div className="stat-label">Companies & Clients</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">3+</div>
            <div className="stat-label">Projects Shipped</div>
          </div>
        </div>
      </div>
    </section>
  )
}

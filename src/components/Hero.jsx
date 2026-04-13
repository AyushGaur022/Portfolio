import React from 'react'

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Ayush Gaur</h1>
        <h2 className="hero-tagline">
          <span id="typed-text" className="typed"></span><span className="cursor"></span>
        </h2>
        <p className="hero-desc">
          Frontend Web Developer with 2+ years of experience crafting responsive, user-centric web and mobile applications. I turn designs into fast, polished digital experiences.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </div>
    </div>
  )
}

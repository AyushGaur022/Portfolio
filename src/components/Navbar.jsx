import React from 'react'

export default function Navbar(){
  return (
    <header className="sticky-top z-50 border-bottom border-secondary" style={{backgroundColor: 'var(--primary-color)'}}>
      <div className="container-fluid container-lg px-4 px-sm-5 py-3 d-flex justify-content-between align-items-center">
        <a href="#home" id="logo-link" className="fs-4 fw-bold text-accent text-decoration-none">AYUSH.<span id="logo-span" className="text-white">GAUR</span></a>
        <div className="d-none d-md-flex align-items-center ms-auto">
          <nav className="d-flex gap-4 me-4">
            <a href="#about" className="nav-link fs-5 fw-medium transition duration-300 p-0 text-white">About</a>
            <a href="#skills" className="nav-link fs-5 fw-medium transition duration-300 p-0 text-white">Skills</a>
            <a href="#projects" className="nav-link fs-5 fw-medium transition duration-300 p-0 text-white">Projects</a>
            <a href="#experience" className="nav-link fs-5 fw-medium transition duration-300 p-0 text-white">Experience</a>
            <a href="#certificates" className="nav-link fs-5 fw-medium transition duration-300 p-0 text-white">Certificates</a>
            <a href="#contact" className="nav-link fs-5 fw-medium transition duration-300 p-0 text-white">Contact</a>
          </nav>
          {/* <button id="theme-toggle" className="btn p-2 rounded-md transition duration-150 text-accent border-0">
            <i id="theme-icon" className="fas fa-moon fs-5"></i>
          </button> */}
        </div>
        <button id="mobile-menu-button" className="btn d-md-none p-2 rounded-md border-0" style={{color: 'var(--text-color)', background: 'var(--secondary-bg)'}}>
          <i className="fas fa-bars fs-5"></i>
        </button>
      </div>
      <div id="mobile-menu" className="d-md-none collapse" style={{backgroundColor: 'var(--primary-color)'}}>
        <a href="#about" className="d-block px-4 py-2 small text-white text-decoration-none">About</a>
        <a href="#skills" className="d-block px-4 py-2 small text-white text-decoration-none">Skills</a>
        <a href="#projects" className="d-block px-4 py-2 small text-white text-decoration-none">Projects</a>
        <a href="#experience" className="d-block px-4 py-2 small text-white text-decoration-none">Experience</a>
        <a href="#certificates" className="d-block px-4 py-2 small text-white text-decoration-none">Certificates</a>
        <a href="#contact" className="d-block px-4 py-2 small text-white text-decoration-none">Contact</a>
      </div>
    </header>
  )
}

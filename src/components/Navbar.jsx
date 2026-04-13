import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar-custom">
      <div className="navbar-inner">
        <a href="#home" className="logo">AYUSH.<span>GAUR</span></a>
        <ul className="nav-links">
          {['about','skills','projects','experience','certificates','contact'].map(s => (
            <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <button className="hamburger" id="hamburger" aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
      <nav className="mobile-nav" id="mobile-nav">
        {['about','skills','projects','experience','certificates','contact'].map(s => (
          <a key={s} href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
        ))}
      </nav>
    </header>
  )
}

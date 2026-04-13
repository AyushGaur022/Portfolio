import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="alt reveal">
      <div className="inner">
        <h3 className="section-title"><span className="num">06 &mdash;</span> Get In Touch <span className="line"/></h3>
        <div className="contact-wrap">
          <p>
            I'm currently looking for new opportunities as a Frontend Developer. Whether you have a project in mind, a role to discuss, or just want to say hi — my inbox is always open.
          </p>
          <a href="mailto:ayushgaur022@gmail.com" className="btn-primary">
            Say Hello <i className="fas fa-paper-plane" style={{fontSize:'0.8rem'}}></i>
          </a>
          <div className="contact-socials">
            <a href="https://linkedin.com/in/ayushgaur" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/AyushGaur022" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:ayushgaur022@gmail.com" className="social-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="contact-info">Ghaziabad, UP &nbsp;|&nbsp; +91-9650254535</p>
        </div>
      </div>
    </section>
  )
}

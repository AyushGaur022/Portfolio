import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-5 px-4 scroll-reveal">
      <div className="col-lg-6 mx-auto text-center">
        <h3 className="fs-2 fw-bold mb-4 text-white border-bottom border-accent d-inline-block pb-1">06. Get In Touch</h3>
        <p className="fs-5 mb-4 text-secondary-custom">I'm currently seeking a new Software Developer / Frontend Engineer role in a growth-oriented team. Whether you have a question or just want to say hi, my inbox is always open!</p>
        <a href="mailto:ayushgaur022@gmail.com" className="btn border border-2 border-accent text-accent fw-bold py-3 px-5 rounded-pill text-decoration-none fs-5 glow-hover">Say Hello</a>
        <div className="mt-5 text-center">
          <p className="small text-secondary-custom mb-2">Connect with me</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://linkedin.com/in/ayush-gaur-220773245" target="_blank" rel="noreferrer" className="fs-4 text-white hover-text-accent transition duration-300"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:ayushgaur022@gmail.com" className="fs-4 text-white hover-text-accent transition duration-300"><i className="fas fa-envelope"></i></a>
            <a href="#" target="_blank" rel="noreferrer" className="fs-4 text-white hover-text-accent transition duration-300"><i className="fab fa-github"></i></a>
          </div>
          <p className="mt-3 text-secondary-custom small">Ghaziabad, UP | +91-9650254535</p>
        </div>
      </div>
    </section>
  )
}

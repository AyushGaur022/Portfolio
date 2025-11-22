import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.section id="about" className="py-5 px-4 scroll-reveal"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="container-lg mx-auto">
        <h3 className="fs-2 fw-bold mb-5 text-white border-bottom border-accent d-inline-block pb-1">01. About Me</h3>
        <div className="row align-items-start">
          <div className="col-md-8 fs-5">
            <p className="mb-4">
              I am a <strong className="text-accent">Frontend Engineer</strong> with 2+ years of experience specializing in building responsive, user-friendly web and mobile applications. My expertise centers around modern JavaScript, <strong className="text-accent">React.js</strong>, and <strong className="text-accent">React Native</strong>.
            </p>
            <p className="mb-4 text-secondary-custom">
              I am adept at translating complex designs into clean, scalable code. I bring a full-stack understanding to the table, with knowledge in <strong className="text-accent">Node.js, Express, and MongoDB</strong>, complemented by a strong grasp of REST APIs.
            </p>
            <p className="text-secondary-custom">
              My professional mission is to collaborate, solve problems efficiently, and deliver high-performance projects on time, ensuring a seamless user experience across all devices.
            </p>
            <div className="mt-4">
              <a href="mailto:ayushgaur022@gmail.com" className="text-accent text-decoration-none d-flex align-items-center hover-underline">
                <i className="fas fa-envelope me-2"></i> ayushgaur022@gmail.com
              </a>
              <a href="https://linkedin.com/in/ayush-gaur-220773245" target="_blank" rel="noreferrer" className="text-accent text-decoration-none d-flex align-items-center mt-2 hover-underline">
                <i className="fab fa-linkedin me-2"></i> LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
            <div className="w-100 h-100 d-flex align-items-center justify-content-center cube-container" style={{maxWidth: '256px', maxHeight: '256px'}}>
              <div className="cube">
                <div className="cube-face img-zoom"><i className="fab fa-react"></i></div>
                <div className="cube-face img-zoom"><i className="fab fa-js-square"></i></div>
                <div className="cube-face img-zoom"><i className="fab fa-node-js"></i></div>
                <div className="cube-face img-zoom"><i className="fas fa-code"></i></div>
                <div className="cube-face img-zoom"><i className="fas fa-mobile-alt"></i></div>
                <div className="cube-face img-zoom"><i className="fas fa-database"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

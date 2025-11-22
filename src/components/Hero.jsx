import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <motion.section id="home" className="min-vh-75 d-flex align-items-center justify-content-center text-center px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className="col-lg-7">
        <p className="fs-4 text-accent fw-medium mb-4">Hello, my name is</p>
        <h1 className="display-3 fw-bold mb-4 text-white">AYUSH GAUR</h1>
        <h2 id="typing-text" className="fs-3 fw-light h-10"></h2>
        <div className="mt-5 d-flex justify-content-center gap-3">
          <a href="#projects" className="btn bg-accent text-dark fw-bold py-3 px-5 rounded-pill text-decoration-none glow-hover">View Projects</a>
          <a href="#contact" className="btn border border-2 border-accent text-accent fw-bold py-3 px-5 rounded-pill text-decoration-none glow-hover">Get in Touch</a>
        </div>
      </div>
    </motion.section>
  )
}

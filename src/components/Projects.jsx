import React from 'react'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <motion.section id="projects" className="py-5 px-4 scroll-reveal"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="container-lg mx-auto">
        <h3 className="fs-2 fw-bold mb-5 text-white border-bottom border-accent d-inline-block pb-1">03. Featured Projects</h3>
        <div className="d-grid gap-4">
          
          {/* Project 1 */}
          <motion.div whileHover={{ scale: 1.01 }} className="project-card p-4 rounded-xl shadow d-flex flex-column flex-md-row align-items-center">
            <div className="col-md-8 me-md-4">
              <span className="text-accent small fw-semibold">React.js</span>
              <h4 className="fs-4 fw-bold mt-2 mb-3 text-white">Tamato (Food Ordering Website)</h4>
              <p className="text-secondary-custom">
                Developed a dynamic food ordering platform featuring category-based filtering for easy navigation. 
                Focus was placed on performance optimization, resulting in a <strong>25% reduction in page rendering time</strong> 
                through efficient component reuse. Optimized the UI for a seamless experience across all devices.
              </p>
            </div>
            <div className="col-md-4 mt-3 mt-md-0 d-flex justify-content-center">
              <i className="fas fa-utensils project-icon text-accent opacity-75"
                 style={{ fontSize: "4rem" }}></i>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div whileHover={{ scale: 1.01 }} className="project-card p-4 rounded-xl shadow d-flex flex-column flex-md-row align-items-center">
            <div className="col-md-8 me-md-4 order-md-2">
              <span className="text-accent small fw-semibold">React Native</span>
              <h4 className="fs-4 fw-bold mt-2 mb-3 text-white">MCQ App (Mobile Quiz Application)</h4>
              <p className="text-secondary-custom">
                Built an interactive mobile quiz application using React Native. 
                Strategic use of optimized state management <strong>improved quiz load speed by 20%</strong>. 
                Features include real-time answer validation and smooth navigation for a superior user testing experience.
              </p>
            </div>
            <div className="col-md-4 mt-3 mt-md-0 d-flex justify-content-center order-md-1">
              <i className="fas fa-mobile-alt project-icon text-accent opacity-75"
                 style={{ fontSize: "4rem" }}></i>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div whileHover={{ scale: 1.01 }} className="project-card p-4 rounded-xl shadow d-flex flex-column flex-md-row align-items-center">
            <div className="col-md-8 me-md-4">
              <span className="text-accent small fw-semibold">HTML, CSS, JS, PHP</span>
              <h4 className="fs-4 fw-bold mt-2 mb-3 text-white">Attendance Tracking System</h4>
              <p className="text-secondary-custom">
                Created a full-stack system to manage attendance with secure login/logout features and detailed analytics. 
                <strong>Increased overall efficiency by 30%</strong> by fully automating the generation and distribution of attendance reports.
              </p>
            </div>
            <div className="col-md-4 mt-3 mt-md-0 d-flex justify-content-center">
              <i className="fas fa-chart-line project-icon text-accent opacity-75"
                 style={{ fontSize: "4rem" }}></i>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}
  
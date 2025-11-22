import React from 'react'
import { motion } from 'framer-motion'

const skillsData = [
  {icon: 'fab fa-react', title: 'React.js / Native', sub: 'Frameworks'},
  {icon: 'fab fa-js-square', title: 'JavaScript (ES6+)', sub: 'Core Language'},
  {icon: 'fab fa-html5', title: 'HTML5 / CSS3', sub: 'Markup & Styling'},
  {icon: 'fas fa-mobile-alt', title: 'Responsive Design', sub: 'Bootstrap / Tailwind'},
  {icon: 'fab fa-node-js', title: 'Node.js', sub: 'Backend'},
  {icon: 'fas fa-database', title: 'REST APIs', sub: 'Integration'},
  {icon: 'fab fa-git-alt', title: 'Git / GitHub', sub: 'Version Control'},
  {icon: 'fab fa-php', title: 'PHP (Basic)', sub: 'Server Side'},
]

export default function Skills(){
  return (
    <motion.section id="skills" className=" py-5 px-4 scroll-reveal" style={{backgroundColor: 'var(--secondary-bg)'}}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="container-lg mx-auto">
        <h3 className="fs-2 fw-bold mb-5 text-white border-bottom border-accent d-inline-block pb-1">02. Core Skills</h3>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-4">
          {skillsData.map((s,i) => (
            <div className="col" key={i}>
              <motion.div whileHover={{ y: -6, scale: 1.03 }} className="skill-card p-4 rounded-3 text-center h-100">
                <i className={`${s.icon} fs-3 text-accent mb-3`}></i>
                <p className="fw-semibold fs-5 mb-0 text-white">{s.title}</p>
                <span className="small text-secondary-custom">{s.sub}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

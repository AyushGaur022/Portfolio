import React from 'react'

const projects = [
  {
    tags: ['React.js', 'CSS3'],
    title: 'Tamato — Food Ordering Platform',
    desc: 'A fully functional food ordering platform with category-based filtering, cart management, and a responsive UI. Reduced page rendering time by 25% through reusable component architecture and React tree optimization.',
    icon: 'fas fa-utensils',
    link: 'https://foodie-zvwy.vercel.app',
    linkText: 'foodie-zvwy.vercel.app'
  },
  {
    tags: ['React Native', 'JavaScript'],
    title: 'MCQ Quiz — Mobile Application',
    desc: 'An interactive mobile quiz app with multiple-choice questions, real-time answer validation, and smooth navigation. Improved app load speed by 20% through efficient state management and rendering optimization.',
    icon: 'fas fa-mobile-alt',
    link: null,
  },
  {
    tags: ['React.js', 'REST API', 'JavaScript'],
    title: 'Attendance Tracking System',
    desc: 'A full-stack attendance management system with secure login/logout and automated analytics reporting. Automated manual processes, increasing administrative efficiency by 30%.',
    icon: 'fas fa-chart-line',
    link: null,
  },
  {
    tags: ['React.js', 'CSS3', 'JavaScript'],
    title: 'Blinkit Clone — Instant Delivery UI',
    desc: 'A pixel-accurate clone of the Blinkit grocery delivery interface featuring product categories, search, cart management, and a fully responsive layout — demonstrating strong UI replication and component architecture skills.',
    icon: 'fas fa-bolt',
    link: null,
  },
  {
    tags: ['React.js', 'CSS3', 'JavaScript'],
    title: 'Nutrabay Clone — E-Commerce Platform',
    desc: 'A feature-rich clone of the Nutrabay supplements store with product listing pages, filters, a detailed product view, and cart flow. Built to practice scalable state management and e-commerce UI patterns.',
    icon: 'fas fa-shopping-bag',
    link: null,
  },
  {
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    title: 'Card Creator — Custom Card Generator',
    desc: 'A browser-based card design tool that lets users customize greeting cards with text, colors, and layouts and download the result. A creative utility showcasing DOM manipulation and canvas/export techniques.',
    icon: 'fas fa-id-card',
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <h3 className="section-title"><span className="num">03 &mdash;</span> Featured Projects <span className="line"/></h3>
      <div className="projects-list">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  {p.linkText} <i className="fas fa-arrow-right" style={{fontSize:'0.7rem'}}></i>
                </a>
              )}
            </div>
            <div className="project-icon-wrap">
              <i className={p.icon}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

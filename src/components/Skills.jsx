import React from 'react'

const skills = [
  {icon: 'fab fa-react', name: 'React.js / Native', sub: 'Frameworks'},
  {icon: 'fab fa-js-square', name: 'JavaScript ES6+', sub: 'Core Language'},
  {icon: 'fab fa-html5', name: 'HTML5 / CSS3', sub: 'Markup & Styling'},
  {icon: 'fas fa-mobile-alt', name: 'Responsive Design', sub: 'Bootstrap'},
  {icon: 'fab fa-wordpress', name: 'WordPress / WIX', sub: 'CMS & Builders'},
  {icon: 'fas fa-plug', name: 'REST APIs', sub: 'Integration'},
  {icon: 'fab fa-git-alt', name: 'Git / GitHub', sub: 'Version Control'},
  {icon: 'fas fa-box', name: 'NPM / Yarn', sub: 'Package Managers'},
  {icon: 'fas fa-cloud-upload-alt', name: 'Netlify / Vercel', sub: 'Deployment'},
  {icon: 'fas fa-search', name: 'SEO Best Practices', sub: 'Core Competency'},
  {icon: 'fas fa-sync-alt', name: 'Agile Development', sub: 'Workflow'},
  {icon: 'fas fa-code', name: 'VS Code', sub: 'Dev Tools'},
]

export default function Skills() {
  return (
    <section id="skills" className="alt reveal">
      <div className="inner">
        <h3 className="section-title"><span className="num">02 &mdash;</span> Core Skills <span className="line"/></h3>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-item" key={i}>
              <i className={s.icon}></i>
              <div className="skill-name">{s.name}</div>
              <div className="skill-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

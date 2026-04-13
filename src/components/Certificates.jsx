import React from 'react'

const certs = [
  {icon: 'fab fa-react', title: 'React.js Development', issuer: 'GeeksforGeeks', text: 'Comprehensive training on building modern user interfaces and applications using React.js.'},
  {icon: 'fas fa-code', title: 'Frontend Development', issuer: 'GeeksforGeeks', text: 'Mastered foundational and advanced skills in HTML, CSS, and modern JavaScript for web development.'},
  {icon: 'fab fa-js-square', title: 'JavaScript', issuer: 'GeeksforGeeks', text: 'Focused training on ES6+, asynchronous programming, and advanced JavaScript patterns.'},
  {icon: 'fas fa-users', title: 'Soft Skills Training', issuer: 'GeeksforGeeks', text: 'Certification in professional communication, collaboration, and workplace effectiveness.'},
  {icon: 'fas fa-trophy', title: 'IoT Competition Runner-Up', issuer: 'IPEM College', text: 'Secured 2nd place in the Internet of Things design and implementation competition.'},
  {icon: 'fas fa-laptop-code', title: 'Basic Computer Diploma', issuer: 'General Certification', text: 'Foundational diploma covering essential computer operations and software knowledge.'},
]

export default function Certificates() {
  return (
    <section id="certificates" className="reveal">
      <h3 className="section-title"><span className="num">05 &mdash;</span> Certificates & Recognition <span className="line"/></h3>
      <div className="certs-grid">
        {certs.map((c, i) => (
          <div className="cert-card" key={i}>
            <i className={c.icon}></i>
            <h4>{c.title}</h4>
            <p className="cert-issuer">{c.issuer}</p>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'

const certs = [
  {icon: 'fab fa-react', title: 'React.js Development', issuer: 'GeeksforGeeks', text: 'Completed a comprehensive training course on building modern user interfaces using React.js.'},
  {icon: 'fas fa-code', title: 'Frontend Development', issuer: 'GeeksforGeeks', text: 'Mastered foundational skills in HTML, CSS, and modern JavaScript for web development.'},
  {icon: 'fab fa-js-square', title: 'JavaScript', issuer: 'GeeksforGeeks', text: 'Focused training on ES6+, asynchronous programming, and advanced JavaScript concepts.'},
  {icon: 'fas fa-users', title: 'Soft Skills Training', issuer: 'GeeksforGeeks', text: 'Certification in professional communication, collaboration, and workplace etiquette.'},
  {icon: 'fas fa-trophy', title: 'IoT Competition Runner-up', issuer: 'IPEM College', text: 'Secured 2nd place in the Internet of Things (IoT) design and implementation competition.'},
  {icon: 'fas fa-laptop-code', title: 'Basic Computer Diploma', issuer: 'General Certification', text: 'Foundational diploma covering essential computer operation and basic software knowledge.'},
]

export default function Certificates(){
  return (
    <section id="certificates" className="py-5 px-4 scroll-reveal">
      <div className="container-lg mx-auto">
        <h3 className="fs-2 fw-bold mb-5 text-white border-bottom border-accent d-inline-block pb-1">05. Certificates & Recognition</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {certs.map((c,i) => (
            <div className="col" key={i}>
              <div className="certificate-card p-4 rounded-3 h-100 shadow">
                <i className={`${c.icon} fs-3 text-accent mb-3`}></i>
                <h4 className="fs-5 fw-bold mt-2 mb-2 text-white">{c.title}</h4>
                <p className="small text-secondary-custom mb-2">{c.issuer}</p>
                <p className="small text-white mb-0">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

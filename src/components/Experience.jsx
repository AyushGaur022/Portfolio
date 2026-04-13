import React from 'react'

const jobs = [
  {
    date: 'Feb 2026 — Mar 2026',
    title: 'Web / UI Developer',
    company: 'Freelance',
    location: 'Remote',
    bullets: [
      'Developed a fully responsive yoga website using HTML5, CSS3, JavaScript, and WordPress with seamless cross-device compatibility.',
      'Customized WordPress themes and integrated plugins to meet client branding and functional requirements.',
      'Managed end-to-end frontend delivery — UI development, testing, deployment — with iterative client feedback.',
    ]
  },
  {
    date: 'Dec 2025 — Jan 2026',
    title: 'Web / UI Developer Intern',
    company: 'The Developers Arena',
    location: 'Remote (Virtual)',
    bullets: [
      'Developed and maintained responsive web interfaces using HTML5, CSS3, JavaScript, and React.js.',
      'Built and tested UI components ensuring cross-device compatibility and meeting frontend deadlines.',
    ]
  },
  {
    date: 'Oct 2025 — Nov 2025',
    title: 'Web / UI Developer Intern',
    company: 'AMDOX Technologies',
    location: 'Remote (Virtual)',
    bullets: [
      'Built responsive web interfaces and integrated REST APIs to improve dynamic data rendering.',
      'Developed reusable UI components following component-driven architecture for scalability.',
      'Collaborated with full-stack team on feature development and API consumption.',
    ]
  },
  {
    date: 'Feb 2025 — Sep 2025',
    title: 'Frontend Web Developer',
    company: 'Chetu Inc.',
    location: 'Noida',
    bullets: [
      'Developed interactive web and mobile projects using React.js and React Native.',
      'Improved application performance by 20–25% through optimized state management and reusable component architecture.',
      'Collaborated with QA and senior developers in an agile environment to ship production-ready features on schedule.',
    ]
  },
  {
    date: 'Sep 2024 — Feb 2025',
    title: 'Frontend Web Developer',
    company: 'Smart Brain Co., Ltd.',
    location: 'Noida',
    bullets: [
      'Built React.js and JavaScript-based mini-applications that improved team coding efficiency.',
      'Applied ES6+ patterns and component-driven practices to enhance code quality and maintainability.',
      'Engaged in peer code reviews and collaborative learning sessions.',
    ]
  },
  {
    date: 'Jan 2023 — Jan 2024',
    title: 'Frontend Web Developer',
    company: 'Adaan Digital Solutions',
    location: 'Delhi',
    bullets: [
      'Designed and developed responsive websites for multiple clients using HTML5, CSS3, and JavaScript.',
      'Implemented pixel-accurate, cross-browser-compatible layouts in close collaboration with UI/UX designers.',
      'Optimized on-page SEO, contributing to a 15% increase in organic search traffic across client sites.',
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="alt reveal">
      <div className="inner">
        <h3 className="section-title"><span className="num">04 &mdash;</span> Experience <span className="line"/></h3>
        <div className="timeline">
          {jobs.map((j, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"/>
              <div className="timeline-date">{j.date}</div>
              <div className="timeline-title">{j.title}</div>
              <div className="timeline-company"><span>{j.company}</span> &mdash; {j.location}</div>
              <ul className="timeline-bullets">
                {j.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Experience(){
  return (
    <section id="experience" className="py-5 px-4 scroll-reveal" style={{backgroundColor: 'var(--secondary-bg)'}}>
      <div className="container-lg mx-auto">
        <h3 className="fs-2 fw-bold mb-5 text-white border-bottom border-accent d-inline-block pb-1">04. Experience</h3>

        <div className="position-relative ps-4 border-start border-secondary-custom">
          <div className="mb-4 position-relative">
            <div className="position-absolute rounded-circle bg-accent border border-4" style={{width:'1rem',height:'1rem',left:'-8px',top:0, borderColor:'var(--secondary-bg) !important'}}></div>
            <p className="small fw-light text-secondary-custom ms-3">Jan 2023 – Jan 2024</p>
            <h4 className="fs-5 fw-bold text-white ms-3">Frontend Web Developer</h4>
            <p className="text-accent mb-2 ms-3">Adaan Digital Solutions | Delhi</p>
            <ul className="list-unstyled ms-3 text-secondary-custom">
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Designed and implemented user-friendly websites using HTML, CSS, and JavaScript.</li>
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Collaborated with UI/UX designers to ensure responsive and visually appealing layouts.</li>
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Enhanced SEO compliance, successfully boosting organic traffic by <strong>15%</strong>.</li>
            </ul>
          </div>

          <div className="mb-4 position-relative">
            <div className="position-absolute rounded-circle bg-accent border border-4" style={{width:'1rem',height:'1rem',left:'-8px',top:0, borderColor:'var(--secondary-bg) !important'}}></div>
            <p className="small fw-light text-secondary-custom ms-3">Sept 2024 – Feb 2025</p>
            <h4 className="fs-5 fw-bold text-white ms-3">Frontend Web Developer</h4>
            <p className="text-accent mb-2 ms-3">Smart Brain Co., Ltd. | Noida</p>
            <ul className="list-unstyled ms-3 text-secondary-custom">
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Contributed to training projects focused on React.js and modern JavaScript.</li>
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Developed mini-projects that improved team problem-solving and coding efficiency.</li>
            </ul>
          </div>

          <div className="mb-4 position-relative">
            <div className="position-absolute rounded-circle bg-accent border border-4" style={{width:'1rem',height:'1rem',left:'-8px',top:0, borderColor:'var(--secondary-bg) !important'}}></div>
            <p className="small fw-light text-secondary-custom ms-3">Feb 2025 – Sept 2025</p>
            <h4 className="fs-5 fw-bold text-white ms-3">Frontend Web Developer (Trainee)</h4>
            <p className="text-accent mb-2 ms-3">Chetu Inc. | Noida</p>
            <ul className="list-unstyled ms-3 text-secondary-custom">
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Built and tested interactive projects like an MCQ mobile quiz app (React Native) and a Food Ordering Website (React.js).</li>
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Strengthened expertise in responsive UI, reusable components, and performance optimization.</li>
              <li className="mb-1 d-flex"><i className="fas fa-check-circle text-accent me-2 pt-1"></i> Collaborated with mentors to improve project quality and meet deadlines.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

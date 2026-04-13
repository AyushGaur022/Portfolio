import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Typing animation
    const phrases = [
      'Frontend Web Developer',
      'React.js Specialist',
      'UI / UX Implementor',
      'Mobile App Builder',
    ]
    let pi = 0, ci = 0, deleting = false
    let timer

    function type() {
      const el = document.getElementById('typed-text')
      if (!el) return
      const phrase = phrases[pi]
      if (!deleting) {
        el.textContent = phrase.slice(0, ci + 1)
        ci++
        if (ci === phrase.length) { deleting = true; timer = setTimeout(type, 1800); return }
      } else {
        el.textContent = phrase.slice(0, ci - 1)
        ci--
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; timer = setTimeout(type, 400); return }
      }
      timer = setTimeout(type, deleting ? 45 : 120)
    }
    type()

    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // Active nav
    const sections = document.querySelectorAll('section[id], div[id="home"]')
    const links = document.querySelectorAll('.nav-links a')
    function onScroll() {
      let current = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id })
      links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`)
      })
    }
    window.addEventListener('scroll', onScroll)

    // Mobile menu
    const btn = document.getElementById('hamburger')
    const menu = document.getElementById('mobile-nav')
    if (btn && menu) {
      btn.addEventListener('click', () => menu.classList.toggle('open'))
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')))
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

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

export default function App(){
  useEffect(() => {
    const titles = [
      "Frontend Developer | React.js",
      "Building Responsive Web & Mobile Apps",
      "JavaScript | HTML | CSS | Node.js"
    ];
    const body = document.body;

    function updateThemeIcon(isLight) {
      const themeIcon = document.getElementById('theme-icon');
      if (!themeIcon) return;
      themeIcon.classList.toggle('fa-sun', isLight);
      themeIcon.classList.toggle('fa-moon', !isLight);
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
          if (isLight) {
              link.classList.remove('text-white');
              link.classList.add('text-dark');
          } else {
              link.classList.remove('text-dark');
              link.classList.add('text-white');
          }
      });
      const logoSpan = document.getElementById('logo-span');
      const logoLink = document.getElementById('logo-link');
      if (logoSpan && logoLink) {
          if (isLight) {
              logoSpan.classList.remove('text-white');
              logoLink.classList.remove('text-white');
          } else {
              logoSpan.classList.add('text-white');
              logoLink.classList.add('text-white');
          }
      }
    }

    function toggleTheme() {
      const isLight = body.classList.toggle('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
    }

    function applySavedTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
          body.classList.add('light-mode');
      } else {
          body.classList.remove('light-mode');
      }
    }

    // Typing animation
    const typingElement = () => document.getElementById('typing-text');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    function type() {
        const currentTitle = titles[titleIndex];
        const delay = isDeleting ? 50 : 150;
        const el = typingElement();
        if (!isDeleting && charIndex <= currentTitle.length) {
            if (el) el.textContent = currentTitle.substring(0, charIndex) + ' ';
            charIndex++;
        } else if (isDeleting && charIndex >= 0) {
            if (el) el.textContent = currentTitle.substring(0, charIndex) + ' ';
            charIndex--;
        }
        if (!isDeleting && charIndex > currentTitle.length) {
            isDeleting = true;
            if (el) el.classList.add('typing-cursor');
            typingTimeout = setTimeout(type, 1500);
            return;
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            if (el) el.classList.remove('typing-cursor');
            typingTimeout = setTimeout(type, 500);
            return;
        }
        typingTimeout = setTimeout(type, delay);
    }

    function setupScrollReveal() {
      const sections = document.querySelectorAll('.scroll-reveal');
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, { rootMargin: '0px', threshold: 0.18 });
      sections.forEach(section => observer.observe(section));
    }

    function setupMobileMenu() {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenuButton && mobileMenu && window.bootstrap) {
          const collapse = new window.bootstrap.Collapse(mobileMenu, { toggle: false });
          mobileMenuButton.addEventListener('click', () => collapse.toggle());
          mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => collapse.hide()));
      }
    }

    // Active nav highlight while scrolling
    function setupActiveNav() {
      const sections = document.querySelectorAll('main section[id], footer');
      const navLinks = document.querySelectorAll('.nav-link');
      function activate() {
        let index = sections.length;
        while(--index && window.scrollY + 120 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        const id = sections[index] ? sections[index].id : '';
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if(activeLink) activeLink.classList.add('active');
      }
      activate();
      window.addEventListener('scroll', activate);
      return () => window.removeEventListener('scroll', activate);
    }

    setTimeout(() => {
      applySavedTheme();
      updateThemeIcon(document.body.classList.contains('light-mode'));
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.addEventListener('click', toggleTheme);
      type();
      setupScrollReveal();
      setupMobileMenu();
      const cleanupActive = setupActiveNav();
      // Save cleanup function for unmount
      window.__cleanupActiveNav = cleanupActive;
    }, 60);

    return () => {
      clearTimeout(typingTimeout);
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.removeEventListener('click', toggleTheme);
      if (window.__cleanupActiveNav) window.__cleanupActiveNav();
    };
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

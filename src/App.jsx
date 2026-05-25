import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import DetailPage from './pages/DetailPage'
import ResumeButton from './components/ResumeButton'

import { experiences, projects, skills } from './data'

function HomePage() {
  return (
    <>
      <Header />

      <main className="container">
        <Hero />

        <section className="quickLinks" aria-label="Quick links">
          <a href="#experience">Experience ↗</a>
          <a href="#projects">Projects ↗</a>
          {/* <a href="#skills">Skills ↗</a> */}
          <ResumeButton />
          <a href="#contact">Contact ↗</a>
        </section>

        <section id="experience" className="section">
          <div className="sectionHeader">
            <p>01</p>
            <h2>Experience / 경력</h2>
          </div>

          <div className="grid">
            {experiences.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <p>02</p>
            <h2>Projects / 프로젝트</h2>
          </div>

          <div className="grid">
            {projects.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionHeader">
            <p>03</p>
            <h2>Skills / 역량</h2>
          </div>

          <div className="skillList">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="sectionHeader">
            <p>04</p>
            <h2>Contact / 연락</h2>
          </div>

          <a
            className="contactBox"
            href="mailto:jenny876517@gmail.com?subject=Portfolio%20Contact%20-%20Junhee%20Choi&body=Hello%20Junhee,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A"
          >
            <span className="contactHoverLabel">Send Email ↗</span>
            <span>Let’s connect</span>
            <strong>jenny876517@gmail.com</strong>
          </a>
        </section>
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
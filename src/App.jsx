import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import DetailPage from './pages/DetailPage'
import ResumeButton from './components/ResumeButton'
import SkillSection from './components/SkillSection'

import { experiences, projects, skills } from './data'

import Footer from './components/Footer'

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

        {/* 숫자로 이력의 규모와 개인 프로젝트의 범위를 먼저 파악할 수 있게 요약합니다.
            This overview lets visitors scan the scale of the work before reading each story. */}
        <section className="overview" aria-labelledby="overview-title">
          <div className="overviewHeading">
            <p className="eyebrow">AT A GLANCE / 한눈에 보기</p>
            <h2 id="overview-title">경험을 숫자로 먼저</h2>
          </div>
          <div className="overviewGrid">
            <article className="overviewMetric overviewMetricPink">
              <span className="metricValue">6<span>개월</span></span>
              <p>RGA Valuation 인턴십</p>
              <small>2026.05.11 – 2026.11.10</small>
            </article>
            <article className="overviewMetric">
              <span className="metricValue">167,598<span>건</span></span>
              <p>실효비금 검증 프로젝트</p>
              <small>MG새마을금고 프로젝트 전체 계약 수</small>
            </article>
            <article className="overviewMetric overviewMetricMint">
              <span className="metricValue">9,605<span>건</span></span>
              <p>공제료 분해 검증</p>
              <small>10개 상품 · 9,604건 ±1 이내</small>
            </article>
            <article className="overviewMetric">
              <span className="metricValue">11<span>개</span></span>
              <p>GlassDay 대시보드 위젯</p>
              <small>일정부터 커리어·생활 기록까지</small>
            </article>
          </div>
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

            <SkillSection skills={skills} />
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
      <Footer />
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

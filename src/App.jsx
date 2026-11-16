import './App.css'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect, useRef } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import DetailPage from './pages/DetailPage'
import ResumeButton from './components/ResumeButton'
import SkillSection from './components/SkillSection'

import { experiences, projects, skills } from './data'

import Footer from './components/Footer'

// 다른 페이지로 이동하면 이전 페이지의 스크롤 위치를 물려받지 않게 맨 위로 올립니다.
// Reset scroll on route changes so a new detail page always opens at its beginning.
function ScrollToTop() {
  const { pathname } = useLocation()
  const scrollPositions = useRef(new Map())

  useLayoutEffect(() => {
    const positions = scrollPositions.current
    // 상세 페이지로 갈 때는 새 경로를 위에서 열고, 방문했던 경로로 돌아오면 읽던 위치를 복원합니다.
    // Start a new route at the top, then restore its saved position when the visitor returns.
    const savedPosition = positions.get(pathname)
    window.scrollTo(0, savedPosition ?? 0)

    const rememberPosition = () => {
      positions.set(pathname, window.scrollY)
    }
    window.addEventListener('scroll', rememberPosition, { passive: true })

    return () => {
      // 경로가 바뀌는 순간 마지막 위치를 저장해, 목록으로 돌아왔을 때 같은 자리를 보여줍니다.
      // Save the final position before leaving so returning restores the same place in the list.
      positions.set(pathname, window.scrollY)
      window.removeEventListener('scroll', rememberPosition)
    }
  }, [pathname])

  return null
}

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

        {/* 경력과 프로젝트를 관통하는 일하는 방식을 첫 화면에서 설명합니다.
            Introduce the working style that connects the experience and project sections. */}
        <section id="about" className="aboutSection" aria-labelledby="about-title">
          <div className="aboutHeading">
            <p className="eyebrow">CAREER DIRECTION / 관심 직무와 성장 방향</p>
            <h2 id="about-title">계리·데이터 검증 경험을<br />여신 리스크 분석으로 넓히고 싶습니다.</h2>
          </div>
          <div className="aboutStory">
            <p>가장 우선하는 목표는 카드사·캐피탈사의 여신관리·리스크 분석입니다. 여신 포트폴리오에서 고객군·상품·시장 변화가 건전성과 수익성에 어떻게 연결되는지 분석하고, 그 결과가 심사 기준과 리스크 관리에 어떻게 쓰이는지에 관심이 있습니다.</p>
            <p>보험계리와 재보험 경험은 보험사 계리직에만 한정된 경력이 아니라, 대량 데이터와 가정·현금흐름·손해 결과를 검증하며 숫자의 신뢰도를 다져온 기반입니다. 이 경험을 신용위험과 여신 데이터 분석으로 확장해, 분석을 심사·포트폴리오 의사결정에 연결하는 리스크 분석가로 성장하고 싶습니다. 금융공기업도 병행해 준비하지만, 현재의 1순위는 카드·캐피탈입니다.</p>
          </div>
          <div className="careerArc" aria-label="산업 관심, 경험, 진로 방향">
            <article><span>01 / TARGET INDUSTRY</span><h3>카드사 · 캐피탈사</h3><p>여신 포트폴리오의 성장과 건전성, 수익성을 함께 살피는 금융 업무를 우선 희망합니다.</p></article>
            <article><span>02 / ROLE INTEREST</span><h3>신용리스크 · 여신전략</h3><p>위험 신호와 손실 가능성을 분석해 심사 기준과 포트폴리오 관리에 반영하는 역할에 관심이 있습니다.</p></article>
            <article><span>03 / TRANSFERABLE BASE</span><h3>계리 · 데이터 검증</h3><p>RGA와 써미트에서 쌓은 대량 데이터, 가정, 현금흐름 검증 경험을 신용위험 분석으로 확장합니다.</p></article>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="sectionHeader">
            <p>01</p>
            <h2>Experience / 경력</h2>
          </div>

          <div className="grid">
            {experiences.map((item, index) => (
              <Card key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <p>02</p>
            <h2>Projects / 프로젝트</h2>
          </div>

          <div className="grid">
            {projects.map((item, index) => (
              <Card key={item.id} item={item} index={index} />
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

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
    // 상세 페이지로 갈 때는 새 경로를 위에서 열고, 방문했던 경로로 돌아오면 읽던 위치를 복원합니다.
    // Start a new route at the top, then restore its saved position when the visitor returns.
    const savedPosition = scrollPositions.current.get(pathname)
    window.scrollTo(0, savedPosition ?? 0)

    const rememberPosition = () => {
      scrollPositions.current.set(pathname, window.scrollY)
    }
    window.addEventListener('scroll', rememberPosition, { passive: true })

    return () => {
      // 경로가 바뀌는 순간 마지막 위치를 저장해, 목록으로 돌아왔을 때 같은 자리를 보여줍니다.
      // Save the final position before leaving so returning restores the same place in the list.
      scrollPositions.current.set(pathname, window.scrollY)
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
            <p className="eyebrow">WHO I AM / 나를 소개합니다</p>
            <h2 id="about-title">정확하게 확인하고,<br />이해하기 쉽게 전하는 사람</h2>
          </div>
          <div className="aboutStory">
            <p>저는 결과값을 그대로 받아들이기보다, 어디서 차이가 생겼는지 먼저 확인합니다. RGA와 써미트에서는 원천 데이터와 상품 기준, 산식을 따라가며 수치를 검증했고, GlassDay와 ProcureFlow AX에서는 복잡한 정보와 업무 흐름이 실제 화면에서 보이도록 구조화했습니다.</p>
            <p>정확한 분석이 이해하기 쉬운 설명과 다음 행동으로 이어질 때 더 큰 가치를 만든다고 생각합니다. 근거를 꼼꼼히 확인하고, 동료가 안심하고 이어서 활용할 수 있게 정리하는 것이 제 일하는 방식입니다.</p>
          </div>
          <div className="workPrinciples">
            <article><span>01 / TRACE</span><h3>차이의 원인을 추적</h3><p>원천 데이터와 산출 기준을 대사해 숫자가 달라진 이유를 찾습니다.</p></article>
            <article><span>02 / STRUCTURE</span><h3>복잡한 일을 구조화</h3><p>업무를 기준·단계·예외로 나누어 검토 흐름을 정리합니다.</p></article>
            <article><span>03 / COMMUNICATE</span><h3>다음 행동이 보이게 전달</h3><p>결과와 근거를 다른 사람이 이해하고 이어서 활용할 수 있게 표현합니다.</p></article>
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

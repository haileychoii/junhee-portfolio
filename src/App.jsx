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
            <p className="eyebrow">CAREER DIRECTION / 산업 관심과 성장 방향</p>
            <h2 id="about-title">보험의 불확실성을<br />신뢰할 수 있는 판단으로 바꾸고 싶습니다.</h2>
          </div>
          <div className="aboutStory">
            <p>보험은 계약과 경험 데이터를 바탕으로 불확실한 위험을 보험료·준비금·재보험 구조로 다루는 산업입니다. 저는 가정이나 데이터의 작은 차이가 보험사의 손익과 리스크 판단에 어떻게 이어지는지 이해하는 데 관심이 있습니다. 그래서 결과 숫자뿐 아니라, 그 뒤의 원천 데이터와 산출 기준까지 확인해 왔습니다.</p>
            <p>써미트 계리법인과 RGA에서 쌓은 검증 경험을 바탕으로 IFRS17·재보험·경험통계를 더 깊게 다루고, 디지털 보험과 AI가 확장되는 환경에서도 결과를 설명하고 신뢰를 뒷받침할 수 있는 실무형 보험계리·리스크 분석가로 성장하고 싶습니다.</p>
          </div>
          <div className="careerArc" aria-label="산업 관심, 경험, 진로 방향">
            <article><span>01 / WHY INSURANCE</span><h3>위험을 숫자로 읽는 산업</h3><p>보험 계약·경험 데이터가 가격과 준비금, 리스크 판단으로 연결되는 과정에 관심이 있습니다.</p></article>
            <article><span>02 / WHAT I BUILD ON</span><h3>계리 검증과 데이터 분석</h3><p>167,598건 준비금 검증과 IFRS17 결산 데이터 검토를 통해 원천·가정·결과를 대사했습니다.</p></article>
            <article><span>03 / WHERE I’M GOING</span><h3>설명 가능한 계리·리스크 전문성</h3><p>디지털 보험과 AI 활용에서도 결과의 근거와 책임을 이해하는 실무형 계리 전문가를 지향합니다.</p></article>
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

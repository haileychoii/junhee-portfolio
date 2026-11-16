function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Actuarial · IFRS17 · Reinsurance · Data</p>

        <h1>
          Junhee Choi
          <br />
          Portfolio Archive
        </h1>

        <p className="introKo">
            보험계리·재보험·데이터 분석 경험을 바탕으로,
            <br />
            복잡한 숫자를 비즈니스 인사이트로 연결합니다.
        </p>

        <p className="introEn">
            I turn actuarial, reinsurance, and data experience
            <br />
            into structured business insights.
        </p>
      </div>

      <div className="heroPanel">
        {/* 완료된 가장 최근 경력을 표시하므로 현재 재직 중이라는 표현은 사용하지 않습니다. */}
        {/* This panel shows the most recently completed role, not a current position. */}
        <p>Most Recent Experience</p>
        <strong>IFRS17 Valuation</strong>
        <span>RGA Reinsurance Korea · May 11 – Nov 10, 2026</span>
      </div>
    </section>
  )
}

export default Hero

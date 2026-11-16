function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">ACTUARIAL · DATA · WORKFLOW DESIGN</p>

        <h1>
          Junhee Choi
          <br />
          Portfolio & Point of View
        </h1>

        <p className="introKo">
            보험의 위험을 데이터로 해석하고,
            <br />
            믿을 수 있는 판단으로 연결합니다.
        </p>

        <p className="introEn">
            I turn actuarial and insurance data into decisions people can trust.
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

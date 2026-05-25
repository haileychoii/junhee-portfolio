function EasterEgg({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="easterOverlay" onClick={onClose}>
      <div className="easterModal" onClick={(event) => event.stopPropagation()}>
        <button className="easterClose" type="button" onClick={onClose}>
          ×
        </button>

        <p className="eyebrow">Archive Unlocked</p>
        <h2>Hidden Note</h2>

        <p>
          You found a tiny corner of this portfolio.
          I like turning scattered data, assumptions, and ideas into something structured and useful.
        </p>

        <span>Thanks for exploring 💖</span>
      </div>
    </div>
  )
}

export default EasterEgg
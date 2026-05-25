import { useState } from 'react'

const resumeUrl = '/files/junheechoi_rga_resume_cv.pdf'

function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="resumeButton" type="button" onClick={() => setIsOpen(true)}>
            Resume ↗
      </button>

      {isOpen && (
        <div className="modalOverlay" onClick={() => setIsOpen(false)}>
          <div className="pdfModal" onClick={(event) => event.stopPropagation()}>
            <div className="pdfModalHeader">
              <div>
                <p className="eyebrow">Resume / CV</p>
                <h2>Junhee Choi Resume</h2>
              </div>

              <button className="closeButton" type="button" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>

            <div className="pdfViewer">
              <iframe src={resumeUrl} title="Junhee Choi Resume PDF" />
            </div>

            <div className="pdfActions">
              <a href={resumeUrl} download>
                Download PDF ↓
              </a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                Open in new tab ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ResumeButton
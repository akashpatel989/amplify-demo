import { useState } from 'react'
import './App.css'

const pipeline = [
  { label: 'Provision', detail: 'Cloud resources allocated' },
  { label: 'Build', detail: 'Dependencies installed, app compiled' },
  { label: 'Deploy', detail: 'Live on the global CDN' },
]

function App() {
  const [active, setActive] = useState(2)

  return (
    <div className="page">
      <div className="orb" />
      <div className="grid-overlay" />

      <header className="topbar">
        <span className="brand">AWS Amplify Demo</span>
        <span className="status">
          <span className="dot" />
          System online
        </span>
      </header>

      <main className="hero">
        <p className="eyebrow">AWS Amplify Demo</p>
        <h1>
  Deployed live.<br />Right now, on stage.
</h1>
        <p className="subtext">
          A live look at continuous deployment on AWS: every commit to{' '}
          <code>main</code> triggers an automatic build and deploy — no
          servers to configure, no manual uploads.
        </p>

        <div className="pipeline">
          {pipeline.map((step, i) => (
            <div
              key={step.label}
              className={`step ${i <= active ? 'done' : ''}`}
              onMouseEnter={() => setActive(i)}
            >
              <span className="step-index">{i + 1}</span>
              <div>
                <p className="step-label">{step.label}</p>
                <p className="step-detail">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="meta-row">
          <span>GitHub</span>
          <span className="arrow">→</span>
          <span>AWS Amplify</span>
          <span className="arrow">→</span>
          <span>Live URL</span>
        </div>
      </main>

      <footer className="footer">
        Built and deployed with AWS Amplify · Hosted on Amazon CloudFront
      </footer>
    </div>
  )
}

export default App
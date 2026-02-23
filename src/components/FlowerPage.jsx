import { useMemo, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import FlowerViewer from './FlowerViewer'
import flowers from '../data/flowers'

export default function FlowerPage() {
  const { flowerId } = useParams()
  const flower = flowers.find(f => f.id === parseInt(flowerId))
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const audioRef = useRef(null)
  const letter = flower?.letter || {}

  const songSrc = useMemo(() => letter.songSrc || '/letter-song.mp3', [letter.songSrc])
  const imageSrc = useMemo(() => letter.imageSrc || '', [letter.imageSrc])
  const messageLines = useMemo(() => {
    if (Array.isArray(letter.message) && letter.message.length) return letter.message
    if (typeof letter.message === 'string' && letter.message.trim()) return [letter.message]
    return [
      'This beautiful flower represents the perfect way to express your love and affection.',
      'Use your mouse to rotate and zoom around the 3D model!',
    ]
  }, [letter.message])

  if (!flower) {
    return (
      <div className="valentine-app">
        <div className="error-container">
          <h2>Flower not found 💔</h2>
          <Link to="/" className="back-button">Return to Garden</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="valentine-app">
      <header className="flower-page-header">
        <h1>{flower.emoji} {flower.name} {flower.emoji}</h1>
        <p>A beautiful expression of love</p>
      </header>
      
      <div className="page-container">
        <main className="flower-page-main">
          <audio ref={audioRef} src={songSrc} loop />
          <div className="flower-viewer-full">
            <FlowerViewer 
              flowerUrl={`/${flower.file}`} 
              viewerConfig={flower.viewer}
            />
          </div>
          
          <div className="flower-details">
            <div
              className={`envelope-wrapper ${isEnvelopeOpen ? 'open' : ''}`}
              onClick={() => {
                const next = !isEnvelopeOpen
                setIsEnvelopeOpen(next)

                const audio = audioRef.current
                if (!audio) return

                if (next) {
                  // reset src in case song changed between flowers
                  if (audio.src !== window.location.origin + songSrc) {
                    audio.src = songSrc
                  }
                  audio.currentTime = 0
                  audio.play().catch(() => {
                    // ignore autoplay errors
                  })
                } else {
                  audio.pause()
                }
              }}
            >
              <div className="envelope">
                <div className="envelope-seal">❤️</div>
                <div className="envelope-flap" />
                <div className="envelope-body" />
                <div className="envelope-letter">
                  <div
                    className="letter-image"
                    style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
                  />
                  <p className="letter-title"> {flower.name}</p>
                  {messageLines.map((line, idx) => (
                    <p key={idx} className="letter-line">{line}</p>
                  ))}
                </div>
              </div>
              <p className="envelope-hint">
                {isEnvelopeOpen ? 'Click to close your letter' : 'Click to open your letter'}
              </p>
            </div>
          </div>
        </main>

        {imageSrc && (
          <div className={`letter-overlay ${isEnvelopeOpen ? 'visible' : ''}`}>
            <div
              className="letter-overlay-image"
              style={{ backgroundImage: `url(${imageSrc})` }}
            />
            <button
              type="button"
              className="letter-overlay-close"
              onClick={() => {
                setIsEnvelopeOpen(false)
                const audio = audioRef.current
                if (audio) {
                  audio.pause()
                }
              }}
            >
              Close letter
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

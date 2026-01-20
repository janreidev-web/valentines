import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import flowers from '../data/flowers'

export default function Gallery() {
  useEffect(() => {
    // Preload GLB files in background for faster loading
    flowers.forEach((flower) => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = `/${flower.file}`
      link.as = 'fetch'
      link.type = 'model/gltf-binary'
      document.head.appendChild(link)
    })
  }, [])

  return (
    <div className="valentine-app">
      <div className="page-container">
        <header className="valentine-header">
          <h1>💕 Valentine's Flower Garden 💕</h1>
          <p>Choose a flower to express your love</p>
        </header>
        
        <main className="gallery-main">
          <div className="flower-cards-grid">
            {flowers.map((flower) => (
              <Link 
                key={flower.id} 
                to={`/flower/${flower.id}`}
                className="flower-card-link"
              >
                <div className="flower-card">
                  <div className="flower-emoji-large">{flower.emoji}</div>
                  <h3 className="flower-name">{flower.name}</h3>
                  <p className="flower-description">Click to view in 3D</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

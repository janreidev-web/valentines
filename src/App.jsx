import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import FlowerPage from './components/FlowerPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/flower/:flowerId" element={<FlowerPage />} />
      </Routes>
    </Router>
  )
}

export default App

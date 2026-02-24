import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import BtsPres from './pages/BtsPres'
import Projects from './pages/Projects'
import Internship from './pages/Internship'
import TechWatch from './pages/TechWatch'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const pages = {
    home: <Home />,
    bts: <BtsPres />,
    projects: <Projects />,
    internship: <Internship />,
    techwatch: <TechWatch />,
  }

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{pages[currentPage]}</main>
      <Footer />
    </div>
  )
}

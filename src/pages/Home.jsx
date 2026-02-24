import React, { useState } from 'react'
import './Home.css'

export default function Home() {
  const [showCV, setShowCV] = useState(false)

  const openCV = () => {
    setShowCV(true)
  }

  const closeCV = () => {
    setShowCV(false)
  }

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-content">
          <div className="home-info">
            <h1 className="home-title">Portfolio Killian FOL</h1>
            <h2 className="home-subtitle">BTS Services Informatiques aux Organisations</h2>
            <div className="home-details">
              <p className="home-age">22 ans</p>
              <p className="home-option">Option SISR - Solutions d'Infrastructure, Systèmes et Réseaux</p>
              <p className="home-year">Année 2024-2026</p>
              <div className="home-interests">
                <h3>Centres d'intérêt</h3>
                <ul>
                  <li>🏎️ Automobile et sports mécaniques</li>
                  <li>🌐 Administration systèmes et réseaux</li>
                  <li>🔒 Cybersécurité</li>
                  <li>🎮 Jeux vidéo</li>
                </ul>
              </div>
              <div className="home-ambitions">
                <h3>Parcours d'études</h3>
                <p>Après 3 ans d'études dans le jeu vidéo orienté programmation, j'ai acquis une solide expérience en développement et avec les outils comme Unity et Unreal Engine 5. Cette formation m'a permis de développer des compétences en programmation que je mets aujourd'hui à profit dans le domaine des infrastructures et réseaux.</p>
              </div>
              <div className="home-ambitions">
                <h3>Perspectives de poursuite d'études</h3>
                <p>Après le BTS SIO, je souhaite poursuivre en Licence à Saint-Denis pour approfondir mes compétences en infrastructure réseau et cybersécurité.</p>
              </div>
              <div className="home-ambitions">
                <h3>Ambitions professionnelles</h3>
                <p>Devenir expert en infrastructure réseau et cybersécurité, avec une spécialisation en administration systèmes.</p>
              </div>
            </div>
          </div>
          <div className="home-image">
            <img src="/logo-saint_denis.png" alt="Logo Saint-Denis" className="school-logo" />
            <button onClick={openCV} className="cv-download-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Voir mon CV
            </button>
          </div>
        </div>
      </div>

      {showCV && (
        <div className="cv-modal" onClick={closeCV}>
          <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <h3>Curriculum Vitae - Killian FOL</h3>
              <button className="cv-modal-close" onClick={closeCV}>
                ✕
              </button>
            </div>
            <div className="cv-modal-body">
              <iframe
                src="/CV_Fol_Killian_2026.pdf"
                title="CV Killian FOL"
                className="cv-pdf-viewer"
              />
            </div>
            <div className="cv-modal-footer">
              <a href="/CV_Fol_Killian_2026.pdf" download="CV_Fol_Killian_2026.pdf" className="cv-download-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

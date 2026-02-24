import React from 'react'
import './Navigation.css'

export default function Navigation({ currentPage, onPageChange }) {
  const menuItems = [
    { id: 'home', label: 'Présentation' },
    { id: 'bts', label: 'Présentation du BTS' },
    { id: 'projects', label: 'Projets PPE' },
    { id: 'internship', label: 'Expérience Professionnelle' },
    { id: 'techwatch', label: 'Veille Technologique' },
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <h2 className="nav-title">Portfolio Killian FOL</h2>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => onPageChange(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

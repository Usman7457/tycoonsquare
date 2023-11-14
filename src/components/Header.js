import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><Link to="/"><img src="assets/img/logoo.png" alt="tycoon-square" />{props.title}</Link></h1>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto" to="/">{props.home}</Link></li>
          <li><Link className="nav-link scrollto" to="/about">{props.about}</Link></li>
          <li><Link className="nav-link scrollto" to="/features">{props.features}</Link></li>
          <li><Link className="nav-link scrollto " to="/portfolio">{props.portfolio}</Link></li>
          <li><Link className="nav-link scrollto" to="/pricing">{props.pricing}</Link></li>
          <li><Link className="nav-link scrollto" to="/contact">{props.contact}</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}

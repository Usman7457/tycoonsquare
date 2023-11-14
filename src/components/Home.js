import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div id="hero" className="d-flex align-items-center">
    <div className="container position-relative"> 
      <h1 style={{fontWeight: '75px'}}>{props.heading}</h1>
      <Link to="/contact" style={{marginTop: '10px'}} className="btn-get-started scrollto">{props.buttonTitle}</Link>
    </div>
  </div>
  )
}

import React from 'react'

export default function Home(props) {
  return (
    <div id="hero" className="d-flex align-items-center">
    <div className="container position-relative">
      <h1 style={{fontWeight: '75px'}}>{props.heading}</h1>
      <a href="/contact" style={{marginTop: '10px'}} className="btn-get-started scrollto">{props.buttonTitle}</a>
    </div>
  </div>
  )
}

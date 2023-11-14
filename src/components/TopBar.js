import React from 'react'

export default function TopBar() {
  return (
    <div id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope-fill"></i><a href="mailto:info@tycoonsquare.pk">info@tycoonsquare.pk</a>
        <i className="bi bi-phone-fill phone-icon"></i><a href="tel:+92 336 5000004">+92 336 5000004</a>
      </div>
      <div className="social-links d-none d-md-block">
        <a href="https://twitter.com/thesourcepak" className="twitter" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/The-Sourcepk-108183431326565/" className="facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/thesourcepak/" className="instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
    </div>
  )
}

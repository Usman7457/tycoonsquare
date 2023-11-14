import React from 'react'

export default function Portfolio() {
  return (
    <>

<div id="cta" className="cta">
        <div className="container">
          <div className="text-center">
            <h1 style={{color: 'white'}}>COMPANY PORTFOLIO</h1>
          </div>
        </div>
      </div>

    <section id="portfolio" className="portfolio my-3">
      <div className="container">

        <div className="section-title" style={{marginTop:'-50px'}}>
          <span>Tycoon Square Portfolio</span>
          <h2>Tycoon Square Portfolio</h2>
          <p>20 YEARS OF EXPERIENCE IN REAL ESTATE</p>
        </div>
        <center><img src="assets/img/abc.jpg" className="img-fluid" alt="" /></center>
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <a href="http://tycoonestate.com.pk/" className="button button3" target="blank">Visit Tycoon's Website</a>
        </div>
      </div>
    </section>
    </>
  )
}

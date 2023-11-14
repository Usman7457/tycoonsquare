import React from "react";

export default function About() {
  return (
    <>
      <div id="cta" className="cta">
        <div className="container">
          <div className="text-center">
            <h1 style={{color: 'white'}}>ABOUT TYCOON SQUARE</h1>
          </div>
        </div>
      </div>

      <div id="about" className="about my-3">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                src="assets/img/ts.jpg"
                className="img-fluid"
                alt=""
                style={{ marginTop: "50px" }}
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Tycoon Square</h3>
              <p style={{ textAlign: "justify", marginBottom: "10px" }}>
                Tycoon Square is a luxury commercial and residential complex,
                being developed by one of the leading and reputed companies
                “Tycoon Estate & Builders” in collaboration with “The Source
                Marketing (Pvt) Ltd. Tycoon Square offers ultra-modern
                architecture and infrastructure while proposing to its
                resident’s once-in-a-lifetime living experience. This commercial
                and residential building has world-class amenities and a luxury
                lifestyle. Tycoon square has everything you need, whether you
                are looking for a shop, mega designer outlet, or luxuriously
                furnished apartments. Tycoon Square is located in the heart of
                Paradise Commercial, Bahria Town, Rawalpindi, the project site
                is only a minute away from the main gate Bahria town phase-4,
                Tycoon Square also enjoys a lucrative location for nearby mega
                projects. The Tycoon Square is a multi-useful project that
                accommodates shopping, dining as well as residential and
                commercial purposes. In short, Tycoon Square is all in one
                commercial and residential project with a fabulous design; four
                sides open view, and two sides wide parking area. Tycoon Square
                Brings you the best investment opportunity with an expected
                capital gain of approximately 20% to 30% in a year. Tycoon
                Square also offers management of luxury apartments and
                guarantees 0.8% monthly rent after completion. Experience the
                Tycoon’s lifestyle with Luxury and Entertainment into a great
                destination.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-lg-12 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <div className="section-title" style={{ marginTop: "-50px" }}>
                <span>Project By</span>
                <h2>Project By</h2>
              </div>
              <div style={{ marginTop: "25px" }}>
                <img src="assets/img/11.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <img
                  src="assets/img/tslogo.png"
                  className="img-fluid"
                  alt=""
                  style={{ width: "63%" }}
                />
                <p
                  style={{
                    textAlign: "justify",
                    marginBottom: "10px",
                    marginTop: "15px",
                  }}
                >
                  <br />
                  Tycoon is an independently owned Australian company and has
                  been recognized by our clients and peers as national leaders
                  in premium land development, construction excellence, and
                  design innovation. Being a market leader in interest-free land
                  development we are renowned for our unwavering attention to
                  detail and high standards of customer service and working in
                  conjunction with the private sector to produce quality
                  developments. Tycoon Estate & Builders has a track record of
                  success and timely delivery of property projects. Tycoon gets
                  the services of premium developers to deliver blue-chip land
                  and in-house Builders assist with the construction of houses
                  at a discounted rate. Investors have enjoyed a consistent
                  return of over 20% per annum. Tycoon’s developments and
                  construction reflect the personalities, lifestyles, and
                  desires of the clients.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <img
                  src="assets/img/tslogo1.png"
                  className="img-fluid"
                  alt=""
                  style={{ width: "61%" }}
                />
                <p style={{ textAlign: "justify", marginTop: "10px" }}>
                  <br />
                  The Source is one of the leading real estate marketing private
                  limited companies, based in the heart of twin cities
                  Rawalpindi and Islamabad. We specialize in establishing
                  marketing & sales strategies, event management & marketing
                  campaigns for real estate projects. We work hand-in-hand with
                  our clients to identify and execute innovative master plans
                  across online & offline mediums. Our professional team is
                  serving many known developers for marketing & sales purposes
                  and serving many renowned projects achieving high excellence.
                  We also believe in Knowledge-based direct marketing by
                  understanding the regional cultural requirements of people
                  living in Pakistan and abroad. The company’s primary business
                  is the sale of the right selected real estate projects, as
                  well as our own construction projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import FeaturesBox from "./features/FeaturesBox";

export default function SalientFeatures() {
    const box = [
        {
            columnSize: 12,
            description: "MOST PROGRESSING COMMERCIAL AREA PARADISE BAHRIA TOWN"
        },
        {
            columnSize: 4,
            description: "25% DOWN PAYMENT ONLY"
        },
        {
            columnSize: 4,
            description: "2 YEARS EASY INSTALMENT PLAN"
        },
        {
            columnSize: 4,
            description: "0.8% GUARANTEED MONTHLY RETURN"
        },
        {
            columnSize: 4,
            description: "MAIN SAWAN BUS TERMINAL"
        },
        {
            columnSize: 4,
            description: "SECURE AND SAFE GATED COMMUNITY"
        },
        {
            columnSize: 4,
            description: "TOP SCHOOLS & UNIVERSITY SCHOOL"
        },
        {
            columnSize: 4,
            description: "GRAND SHOPPING MALLS"
        },
        {
            columnSize: 4,
            description: "TOP HOTELS & RESTAURANTS BRANDS"
        },
        {
            columnSize: 4,
            description: "HOSPITALS"
        },
        {
            columnSize: 6,
            description: "IDEAL APPROACH – JUST 300 METERS FROM GT ROAD"
        },
        {
            columnSize: 6,
            description: "20% TO 30% ANNUAL APPRECIATION EXPECTED"
        },
    ]
  return (
    <div>
      <div id="cta" className="cta">
        <div className="container">
          <div className="text-center">
            <h1 style={{ color: "white" }}>PROJECT SALIENT FEATURES</h1>
          </div>
        </div>
      </div>

      <section id="services" className="services my-3">
        <div className="container">
          <div className="section-title" style={{ marginTop: "-50px" }}>
            <span>Salient Features</span>
            <h2>Tycoon Square Salient Features</h2>
            <p>
              FROM STRATEGY TO EXECUTION, OUR WINNING COMBINATION OF INNOVATIVE
              THINKING, SCIENTIFIC DESIGN AND ONGOING ANALYSIS ENSURE WE’RE
              DELIVERING VALUE TO HELP YOU.
            </p>
          </div>

          <div>
            <center>
              <img src="assets/img/def.jpg" className="img-fluid" alt="" />
            </center>
          </div>
          <br />
          <br />
          <div className="section-title my-4">
            <span>WHY US</span>
            <h2>WHY CHOOSE TYCOON SQUARE</h2>
          </div>
          <div className="row">
          {box.map((box, index) => (
              
                <FeaturesBox data={box} key={index} />
            
        ))}
          </div>
        </div>
      </section>

      <div id="cta" className="cta">
        <div className="container">
          <div className="text-center">
            <h3>
              WELCOME TO ONE-OF-ITS-KIND PREMIUM LIFESTYLE IN THE HEART OF TWIN
              CITIES PARADISE COMMERCIAL BAHRIA TOWN RAWALPINDI
            </h3>
            <Link className="cta-btn" to="/contact">
              Book Your Shop/Apartment Now
            </Link>
          </div>
        </div>
      </div>

      <div
        className="text-center"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <iframe
          width="1200"
          height="550"
          src="https://www.youtube.com/embed/mmrxRnJeVkA"
          title="Tycoon Square"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

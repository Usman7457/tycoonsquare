import React from "react";
import PriceBox from "./pricing/PriceBox";

export default function Pricing() {
  const boxes = [
    {
      featured: false,
      title: "STUDIO / 1 BED APARTMENTS",
      price: 24,
      description: [
        "30% Down Payment",
        "2 Years Quartely Installments",
        "PKR 18000/Sqft",
        "Studio Apartments From Area 465.58 Sqft",
        "1 Bed Apartment Area 792.30 Sqft",
      ],
      button: {
        text: "Book Shop Now",
        url: "/contact",
      },
    },
    {
      featured: true,
      title: "LUXURY SHOPS",
      price: 71,
      description: [
        "30% Down Payment",
        "2 Years Quartely Installments",
        "PKR 45000/Sqft",
        "From Area 528.55 Sqft",
        "To Area 625.33 Sqft",
      ],
      button: {
        text: "Book Shop Now",
        url: "/contact",
      },
    },
    {
      featured: false,
      title: "MEGA SHOPS",
      price: 99,
      description: [
        "30% Down Payment",
        "2 Years Quartely Installments",
        "PKR 80000/Sqft",
        "From Area 702.58 Sqft",
        "To Area 793.2 Sqft",
      ],
      button: {
        text: "Book Shop Now",
        url: "/contact",
      },
    },
  ];
  return (
    <>
      <div id="cta" className="cta">
        <div className="container">
          <div className="text-center">
            <h1 style={{ color: "white" }}>PROPERTY PACKAGES</h1>
          </div>
        </div>
      </div>

      <section id="pricing" className="pricing my-3 ">
        <div className="container">
          <div className="section-title" style={{ marginTop: "-50px" }}>
            <span>Pricing</span>
            <h2>Pricing</h2>
          </div>

          <div className="row">
            {boxes.map((box, index) => (
              <div className="col-lg-4" key={index}>
                <PriceBox data={box} />
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "15px", color: "red" }}>
            <b>10%</b> additional charges will be applicable for corner
            shop/apartment. <br /> <i>*Company Terms & conditions apply*</i>
          </p>
          <div style={{ marginTop: "25px" }}>
            <center>
              <img src="assets/img/ghi.jpg" className="img-fluid" alt="" />
            </center>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <a
                href="assets/img/brochure.pdf"
                className="button button3"
                target="blank"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

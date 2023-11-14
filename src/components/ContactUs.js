import React from "react";
import ContactBox from "./contact/ContactBox";

export default function ContactUs() {
  const box = [
    {
      columnSize: 6,
      icon: "map",
      heading: "Office Address",
      description: [
        "Plot No. 188-190, Paradise Commercial, Bahria Town,",
        "Rawalpindi, Pakistan"
      ],
    },
    {
      columnSize: 3,
      icon: "envelope",
      heading: "Official Emails",
      description: [
        "info@tycoonsquare.pk",
        "contact@tycoonsquare.pk"
      ],
    },
    {
      columnSize: 3,
      icon: "phone-call",
      heading: "Official Phone Numbers",
      description: [
        "+92 336 5000004 / 311 4443330",
        "+92 51 8900008 / 8443645"
      ],
    },
  ];

  return (
    <>
      <div id="cta" className="cta">
        <div className="container">
          <div className="text-center">
            <h1 style={{ color: "white" }}>CONTACT DETAILS</h1>
          </div>
        </div>
      </div>

      <section id="contact" className="contact my-3">
        <div className="container">
          <div className="section-title" style={{ marginTop: "-50px" }}>
            <span>Contact Us</span>
            <h2>Contact Us</h2>
            <p>Feel Free To Contact Us Anytime</p>
          </div>

          <div className="row">
          {box.map((box, index) => (
           
                
                <ContactBox data={box}  key={index}/>
               
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

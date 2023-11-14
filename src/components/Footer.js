import React from "react";
import FooterBox from "./footer/FooterBox";

export default function Footer(props) {
  const box = [
    {
      heading: "Bahria Paradise",
      imageUrl: "assets/img/pc.jpg",
      url: "assets/img/pc.jpg",
    },
    {
      heading: "Company Video",
      imageUrl: "assets/img/jkl.jpg",
      url: "https://www.youtube.com/watch?v=-EOWYyN3euo&ab_channel=UsmanSheikh",
    },
    {
      heading: "TS Brochure",
      imageUrl: "assets/img/ghi.jpg",
      url: "assets/img/brochure.pdf",
    },
  ];
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {box.map((box, index) => (
              
                
                  <FooterBox data={box} key={index} />
                
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; 2023 Copyrights{" "}
          <strong>
            <span>{props.title}</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits"></div>
      </div>
    </footer>
  );
}

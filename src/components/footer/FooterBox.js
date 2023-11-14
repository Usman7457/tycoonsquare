import React from "react";
import { Link } from "react-router-dom";

export default function FooterBox(props) {
  const box = props.data;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="footer-info">
        <h3>{box?.heading}</h3>
        <Link to={box?.url} target="blank">
          <img src={box?.imageUrl} alt="" width="316" height="150" />
        </Link>
      </div>
      </div>
    </>
  );
}

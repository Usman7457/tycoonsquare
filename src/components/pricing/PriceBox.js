import React from "react";
import { Link } from 'react-router-dom'

export default function PriceBox(props) {
  const box = props.data;
  return (
    <div className={`pricing my-3   ${box.featured ? "box featured" : "box"}`}>
      <h3>{box?.title}</h3>
      <h4>
        <sup>PKR</sup>
        {box?.price} lakh<span> / booking from</span>
      </h4>
      <ul>
        <li>{box?.description[0]}</li>
        <li>{box?.description[1]}</li>
        <li>{box?.description[2]}</li>
        <li>{box?.description[3]}</li>
        <li>{box?.description[4]}</li>
      </ul>
      <div class="btn-wrap">
        <Link to={box?.button.url} class="btn-buy">
          {box?.button.text}
        </Link>
      </div>
    </div>
  );
}

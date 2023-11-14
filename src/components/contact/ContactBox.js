import React from "react";

export default function ContactBox(props) {
  const box = props.data;
  return (
    <div className={`col-lg-${box?.columnSize}`}>
      <div className="info-box  mb-4">
        <i className={`bx bx-${box?.icon}`}></i>
        <h3>{box?.heading}</h3>
        <p>{box?.description[0]}</p>
        <p>{box?.description[1]}</p>
      </div>
    </div>
  );
}

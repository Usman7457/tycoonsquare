import React from "react";

export default function FeaturesBox(props) {
    const box = props.data;
  return (
    <>
      <div className={`col-lg-${box?.columnSize}`}>
        <div style={{ textAlign: "center" }}>
          <p className="button button">
            <b>{box?.description}</b>
          </p>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";


// getting values as props
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  return (

    <article
      // conditionally adding  classname 
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      // adding copy to clipboard
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      {""}
      <p className="percentage-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );

}


export default SingleColor;

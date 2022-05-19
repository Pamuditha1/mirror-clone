import React from "react";
import "../../styles/button.css";

function Button({ filled, text, href }) {
  return (
    <a className={filled ? "b-button" : "e-button"} href={href}>
      {text}
    </a>
  );
}

export default Button;

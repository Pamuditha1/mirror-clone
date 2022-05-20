import React from "react";
import "../../styles/button.css";

function Button({ filled, text, href, white = false }) {
  return (
    <a
      className={
        filled
          ? white
            ? "b-button-w"
            : "b-button"
          : white
          ? "e-button-w"
          : "e-button"
      }
      href={href}
    >
      {text}
    </a>
  );
}

export default Button;

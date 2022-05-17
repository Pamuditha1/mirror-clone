import React from "react";
import backup from "../media/images/CommercialBackUp.webp";
import "../Styles/image-overlay.css";

import { BsFillCaretRightFill } from "react-icons/bs";

function VideoImage({ showModal }) {
  return (
    <div className="container mt-5 image-div">
      {" "}
      <img src={backup} alt="CommercialBackUp" style={{ width: "100%" }} />
      <button className="o-button">
        <span>
          Play <BsFillCaretRightFill />
        </span>
      </button>
    </div>
  );
}

export default VideoImage;

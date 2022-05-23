import React from "react";
import backup from "../media/images/CommercialBackUp.webp";
import { BsFillCaretRightFill } from "react-icons/bs";
import "../styles/image-overlay.css";

function VideoImage({ handleOpenModal }) {
  return (
    <div className="container mt-5 mb-5 image-div">
      {" "}
      <img src={backup} alt="CommercialBackUp" style={{ width: "100%" }} />
      <button className="o-button" onClick={handleOpenModal}>
        <span>
          Play <BsFillCaretRightFill />
        </span>
      </button>
    </div>
  );
}

export default VideoImage;

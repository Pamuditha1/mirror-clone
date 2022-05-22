import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "../styles/live-banner.css";

function LiveBanner() {
  const [email, setEmail] = useState("");
  return (
    <div className="con-div">
      <div className="text-div">
        <h2 className="visually-hidden">Stay connected.</h2>
        <div className="text-arr">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} aria-hidden="true" className="text-sty p-3">
              Stay connected.{" "}
            </div>
          ))}
        </div>
        <div className="container mt-5 form-con">
          <form className="email-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="email-button">
              <BsArrowRight size={30} color="grey" />
            </button>
          </form>
        </div>
        <div className="container">
          <div className="row text-center mt-5">
            {" "}
            <p className="">
              Get product updates and news from MIRROR right in your inbox. We
              won't spam you, promise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveBanner;

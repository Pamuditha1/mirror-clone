import React from "react";
import "../styles/live-banner.css";

function LiveBanner() {
  return (
    <div className="con-div">
      <div className="text-div">
        <h2 className="visually-hidden">Stay connected.</h2>
        <div className="text-arr">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} aria-hidden="true" className="text-sty">
              Stay connected.
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveBanner;

import React from "react";
import "../Styles/top-header.css";
import { BsFillBagFill } from "react-icons/bs";

function TopHeader() {
  return (
    <header className="th-background">
      <div className="container">
        <div className="row">
          <div className="col-7 th-text mt-3 mb-2">
            FREE SHIPPING & INSTALLATION ($250 VALUE), PLUS A 60-DAY RISK-FREE
            TRIAL{" "}
            <span>
              <a
                href="https://www.mirror.co/shop/packages"
                className="th-shop-now"
              >
                SHOP NOW
              </a>
            </span>
          </div>
          <div className="col-3"></div>
          <div className="col-2 mt-3 mb-3">
            <span className="th-nav mr-2">My Account</span> |{" "}
            <span className="th-nav ml-2">
              Cart <BsFillBagFill className="mb-1" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;

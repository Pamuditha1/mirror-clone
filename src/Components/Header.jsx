import React, { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
  const [headerWhite, setHeaderWhite] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeaderWhite(false);
    } else if (window.scrollY > 70) {
      return setHeaderWhite(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className="header"
      style={{
        backgroundColor: headerWhite ? "white" : "",
        transition: "0.3s",
      }}
      onScrollCapture={() => console.log("scrolled")}
    >
      <div className="container header-con">
        <div className="row mt-3" style={{ height: "100%" }}>
          <div className="col-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              viewBox="0 0 899 153.5"
            >
              <g className={headerWhite ? "g-logo-w" : "g-logo"}>
                <path d="M278.9 2.4h-25l-52.7 148.7h40.9L294.9 2.4zM696 0c-50.2 0-105.9 43.8-107.2 99.6-.7 28.4 19 53.9 55.6 53.9 54.8 0 104.9-47.2 106.2-98.8C751.3 27.6 731 0 696 0zm-45.4 114.6c-14.7 0-22-10.4-21.7-22.2.7-27.3 30.5-54.7 58.2-54.7 13.9 0 21.8 9.4 21.5 22.5-.5 23.1-29.1 54.4-58 54.4zM372.7 99.9l.1-.1c9.8-.2 19.9-2.6 31.6-9.3 14.6-8.5 25.4-23.9 25.4-45.3 0-24.9-17.9-42.8-46-42.8h-61.9l-52.6 148.7h40.9s4.9-14.6 10.1-29.7c5.4-16-9.4-35.4-9.4-35.4l.2-.1 58.9 65.2h50.5l-47.1-50.6-.7-.6zm-13.8-25.6h-23.5l14.1-40.7h26c9.1 0 14 5.2 14 13.8-.1 15.5-13.7 26.9-30.6 26.9zM560.2 90.5c14.6-8.5 25.4-23.9 25.4-45.3 0-24.9-17.9-42.8-46-42.8h-61.9l-52.6 148.7H466s4.9-14.6 10.1-29.7c5.4-16-9.4-35.4-9.4-35.4l.2-.1 58.9 65.2h50.5l-47.1-50.6-.5-.6.1-.1c9.6-.2 19.7-2.6 31.4-9.3zm-45.5-16.2h-23.5l14.1-40.7h26c9.1 0 14 5.2 14 13.8-.1 15.5-13.7 26.9-30.6 26.9zM841.9 99.9l.1-.1c9.8-.2 19.9-2.6 31.6-9.3C888.2 82 899 66.6 899 45.2c0-24.9-17.9-42.8-46-42.8h-61.9l-52.6 148.7h40.9s4.9-14.6 10.1-29.7c5.4-16-9.4-35.4-9.4-35.4l.2-.1 58.9 65.2h50.5l-47.1-50.6-.7-.6zm-13.8-25.6h-23.5l14.1-40.7h26c9.1 0 14 5.2 14 13.8 0 15.5-13.7 26.9-30.6 26.9zM183.6 2.4L88.1 115.3l-.2-.1s16.5-21.9 11-60.3L91.4 2.4H52.7L0 151.1h40.9L65 82.8l8 68.3h26.9l56-66.6-23.8 66.6h41L225.5 2.4h-41.9z"></path>
              </g>
            </svg>
          </div>
          <div className="col-6" style={{ paddingLeft: 60 }}>
            <div className="nav-links-con">
              <nav className="nav">
                <ul className="nav-ul">
                  <li className="nav-li">
                    <a
                      className={headerWhite ? "nav-a-w" : "nav-a"}
                      data-testid="buy-the-mirror"
                      href="/shop/mirror"
                    >
                      Experience Mirror
                    </a>
                  </li>
                  <li className="nav-li">
                    <a
                      className={headerWhite ? "nav-a-w" : "nav-a"}
                      href="/workouts"
                    >
                      Workouts
                    </a>
                  </li>
                  <li className="nav-li">
                    <a
                      className={headerWhite ? "nav-a-w" : "nav-a"}
                      href="/accessories"
                    >
                      Accessories
                    </a>
                  </li>
                  <a
                    className={headerWhite ? "shop-a-w" : "shop-a"}
                    data-testid="add-to-cart"
                    href="/shop/packages"
                  >
                    Shop the Mirror
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

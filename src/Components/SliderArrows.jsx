import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "../styles/sider.css";

function Arrow({ children, disabled, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick} className="arrow">
      {children}
    </button>
  );
}

export function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return <Arrow onClick={() => scrollPrev()}>{"<"}</Arrow>;
}

export function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return <Arrow onClick={() => scrollNext()}>{">"}</Arrow>;
}

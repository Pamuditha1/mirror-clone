import React, { useContext, useState, useEffect } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import "../Styles/sider.css";

function Arrow({ children, disabled, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick} className="arrow">
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = useContext(VisibilityContext);

  // const [disabled, setDisabled] = useState(
  //   !initComplete || (initComplete && isFirstItemVisible)
  // );
  // useEffect(() => {
  //   if (visibleItemsWithoutSeparators.length) {
  //     setDisabled(isFirstItemVisible);
  //   }
  // }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return <Arrow onClick={() => scrollPrev()}>{"<"}</Arrow>;
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  // const [disabled, setDisabled] = useState(
  //   !visibleItemsWithoutSeparators.length && isLastItemVisible
  // );
  // useEffect(() => {
  //   if (visibleItemsWithoutSeparators.length) {
  //     setDisabled(isLastItemVisible);
  //   }
  // }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return <Arrow onClick={() => scrollNext()}>{">"}</Arrow>;
}

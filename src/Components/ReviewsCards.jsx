import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ReviewCard from "./cards/ReviewCard";
import useDrag from "./utils/useDrag";

import reviews from "../data/reviews.json";

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

function ReviewsCards({ title }) {
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <div>
      <ScrollMenu
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {reviews
          .find((review) => review.title === title)
          ?.reviews.map(({ main, ...review }) => (
            <ReviewCard key={main} review={review} />
          ))}
      </ScrollMenu>
    </div>
  );
}

export default ReviewsCards;

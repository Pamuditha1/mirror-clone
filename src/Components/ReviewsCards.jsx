import React from "react";
import ReviewCard from "./ReviewCard";
import reviews from "../data/reviews.json";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useDrag from "./useDrag";

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
          ?.reviews.map(({ id, ...review }) => (
            <ReviewCard key={id} review={review} />
          ))}
      </ScrollMenu>
    </div>
  );
}

export default ReviewsCards;

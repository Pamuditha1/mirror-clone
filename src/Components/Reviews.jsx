import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReviewsCards from "./ReviewsCards";
import Button from "./common/Button";
import "../styles/reviews.css";

const reviewTitles = [
  "Workouts",
  "Convenience",
  "Community",
  "Member Experience",
  "Aesthetic",
];

function Reviews() {
  const [title, setTitle] = useState("Workouts");
  return (
    <div className="reviews-con">
      <div className="row text-center">
        <div className="stars">
          <ReactStars
            edit={false}
            count={5}
            value={5}
            size={24}
            activeColor="black"
          />
        </div>
        <p> 4.9/5</p>
      </div>
      <div className="row text-center mb-5">
        <h1>Why people love Mirror</h1>
      </div>
      <div className="row review-titles-con mt-5 mb-3">
        {reviewTitles.map((reviewTitle) => (
          <div
            key={reviewTitle}
            className={`review-title ${
              reviewTitle === title ? "review-title-clicked" : ""
            }`}
          >
            <p
              key={reviewTitle}
              className="text-center"
              onClick={() => setTitle(reviewTitle)}
            >
              {reviewTitle}
            </p>
          </div>
        ))}
      </div>
      <ReviewsCards title={title} />
      <div className="container mt-5 mb-5 text-center">
        <Button
          filled
          text="Write a review"
          href="https://www.mirror.co/shop/mirror"
        />
        <Button
          text="See all reviews"
          href="https://www.mirror.co/shop/mirror/reviews"
        />
      </div>
    </div>
  );
}

export default Reviews;

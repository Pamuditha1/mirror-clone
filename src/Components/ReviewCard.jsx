import React from "react";
import ReactStars from "react-rating-stars-component";
import "../styles/reviews.css";

function ReviewCard({ review }) {
  const { rating, main, content, user, city, img } = review;
  return (
    <div className="container review-card-con m-3">
      <div className="row">
        <ReactStars
          edit={false}
          count={5}
          value={rating}
          size={24}
          activeColor="black"
        />
      </div>
      <div className="row">
        <h5>{main}</h5>
      </div>
      <div className="row" style={{ height: 175 }}>
        <p>{content}</p>
      </div>
      <div>
        <p>
          <span>
            <b>{user} -</b>
          </span>{" "}
          {city}
        </p>
      </div>
      <div>
        <img src={img} alt="user" />
      </div>
    </div>
  );
}

export default ReviewCard;

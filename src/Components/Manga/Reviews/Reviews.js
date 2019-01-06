import React from "react";

import "./Reviews.scss";

const Reviews = props => {
  const reviews = props.reviews;

  const theReviews = reviews
    .filter((res, i) => i < 3)
    .map(res => {
      return (
        <div className="review" key={res.mal_id}>
          <div className="imgContainer">
            <div
              className="img"
              style={{ backgroundImage: `url(${res.reviewer.image_url})` }}
            />
          </div>
          <div className="text">
            <div className="reviewScores">
              <h6>
                <img
                  src="https://img.icons8.com/ios/50/000000/christmas-star-filled.png"
                  alt="icon"
                />
                Overall: {res.reviewer.scores.overall}
              </h6>
              <h6>
                <img
                  src="https://img.icons8.com/metro/50/000000/paint-palette.png"
                  alt="icon"
                />
                Art: {res.reviewer.scores.art}
              </h6>
              <h6>
                <img
                  src="https://img.icons8.com/ios/50/000000/pokemon-filled.png"
                  alt="icon"
                />
                Character: {res.reviewer.scores.character}
              </h6>
              <h6>
                <img
                  src="https://img.icons8.com/ios/50/000000/activity-history-filled.png"
                  alt="icon"
                />
                Story: {res.reviewer.scores.story}
              </h6>
            </div>
            <div className="reviewText">
              <h4>{res.content.substring(0, 700)}..</h4>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="ReviewContainer">
      <h2>Reviews</h2>
      <div className="reviews">{theReviews}</div>
    </div>
  );
};

export default Reviews;

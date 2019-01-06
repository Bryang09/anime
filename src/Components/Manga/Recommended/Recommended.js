import React from "react";

import { Link } from "react-router-dom";

import "./Recommended.scss";

const Recommended = props => {
  const myRecommended = props.recommended
    .filter((res, i) => i < 4)
    .map(res => {
      return (
        <div className="recommend" key={res.mal_id}>
          <div
            className="img"
            style={{ backgroundImage: `url(${res.image_url})` }}
          >
            <Link to={`/manga/${res.mal_id}`}>
              <div className="text">
                <h3>{res.title}</h3>
              </div>
            </Link>
          </div>
        </div>
      );
    });

  return (
    <div className="Recommended">
      <h1>Recommended</h1>
      <div className="recommendContainer">{myRecommended}</div>
    </div>
  );
};

export default Recommended;

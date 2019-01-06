import React from "react";

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
            <a href={res.url} target="_blank">
              <div className="text">
                <h3>{res.title}</h3>
              </div>
            </a>
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

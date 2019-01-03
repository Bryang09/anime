import React from "react";

import "./ListingDisplay.scss";

const Display = props => {
  const animeTop = props.results
    .filter(res => res.rank < 6)
    .map(res => {
      return (
        <div className="listItem" key={res.rank}>
          <div
            className="listImage"
            style={{ backgroundImage: `url(${res.image_url})` }}
          >
            <div
              className="listText"
              // style={
              //   this.state.overlay ? { display: "flex" } : { display: "none" }
              // }
            >
              <h3>{res.title}</h3>
              <h4>Episodes: {res.episodes}</h4>
              <div className="rating">
                <img src="https://img.icons8.com/color/50/fb7ea1/christmas-star.png" />
                <h5>{res.score}</h5>
              </div>
              <div className="rating">
                <img src="https://img.icons8.com/ios/50/fb7ea1/like-filled.png" />
                <h5>{res.members}</h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div className="Section">
      <div className="listContainer">{animeTop}</div>
    </div>
  );
};

export default Display;

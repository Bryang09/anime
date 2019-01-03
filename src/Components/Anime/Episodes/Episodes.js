import React from "react";

import "./Episodes.scss";

const Episodes = props => {
  return (
    <div className="listings">
      <h1>Listings</h1>
      {props.episodes1.length > 2 ? (
        props.episodes
      ) : (
        <h1>Episodes Havent Released Yet</h1>
      )}
    </div>
  );
};

export default Episodes;

import React from "react";

import Information from "../Information/Information";

const Hero = props => {
  const trailer = props.trailer;
  const info = props.info;
  return (
    <div className="Stats">
      <a href={trailer} id="trailer" target="_blank" rel="noopener noreferrer">
        <div
          className="bgImage"
          style={
            props.pic === undefined
              ? {
                  backgroundImage: `url(https://avatars3.githubusercontent.com/u/6475745?s=88&v=4)`
                }
              : props.pic.length > 2
              ? { backgroundImage: `url(${props.pic[0].large})` }
              : null
          }
        />
      </a>

      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.synopsis.substring(0, 280)} ...</p>
        <Information info={info} />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Zoom from "react-reveal/Zoom";

import "./Episodes.scss";

const Episodes = props => {
  const episodes = props.episodes1.map(res => {
    return (
      <Zoom>
        <div className="episode" key={res.episode_id}>
          <div className="imageContainer">
            <div
              className="img"
              style={
                props.pic !== undefined
                  ? {
                      backgroundImage: `url(${props.pic[1].small})`
                    }
                  : null
              }
            />
          </div>

          <div className="episodeText">
            <div className="title">
              <h3>
                <a
                  href={res.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {res.title}
                </a>
              </h3>
            </div>
            <div className="forum">
              <h5>
                <a
                  href={res.forum_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit The Forum
                </a>
              </h5>
            </div>
          </div>
        </div>
      </Zoom>
    );
  });
  return (
    <div className="listings">
      <h1>Episodes</h1>
      {props.episodes1.length > 2 ? (
        episodes
      ) : (
        <h1>Episodes Havent Released Yet</h1>
      )}
    </div>
  );
};

export default Episodes;

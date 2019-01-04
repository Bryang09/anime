import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Characters.scss";

class Characters extends Component {
  render() {
    console.log(this.props);
    const sortCharacters = this.props.characters.map((res, i) => {
      return (
        <div className="character" key={i}>
          <div
            className="img"
            style={{ backgroundImage: `url(${res.image_url})` }}
          />
          <div className="text">
            <h4>{res.name}</h4>
          </div>
        </div>
      );
    });

    return (
      <div className="CharactersSection">
        <h3>Voice Actors</h3>
        <div className="Characters">{sortCharacters}</div>
        <div className="voiceActors">
          <h4>Voice Actors</h4>
        </div>
      </div>
    );
  }
}

export default Characters;

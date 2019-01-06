import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Characters.scss";

class Characters extends Component {
  state = {
    characters: false
  };

  onSelected = () => {
    this.setState({ characters: !this.state.characters });
  };

  render() {
    const sortCharacters = this.props.characters.map((res, i) => {
      return (
        <div className="character" key={i}>
          <div
            className="img"
            style={{ backgroundImage: `url(${res.image_url})` }}
          >
            <h5
              style={
                res.role === "Main"
                  ? { background: "#11ad2b" }
                  : { background: "#4484d4" }
              }
            >
              {res.role}
            </h5>
          </div>
          <div className="text">
            <h4>
              <Link
                to={{
                  pathname: `/anime/${this.props.props.params.id}/${
                    res.mal_id
                  }`,
                  state: { props: this.props.characters }
                }}
              >
                {res.name}
              </Link>
            </h4>
          </div>
        </div>
      );
    });

    return (
      <div
        className="CharactersSection"
        style={
          this.state.characters
            ? { background: "#48dab8ed" }
            : { background: "#333" }
        }
      >
        <h4 id="btn" onClick={this.onSelected}>
          Search Voice Actors
        </h4>
        <h3 style={{ display: "none" }}>Voice Actors</h3>

        <div
          className="Characters"
          style={
            this.state.characters ? { display: "flex" } : { display: "none" }
          }
        >
          {sortCharacters}
        </div>
      </div>
    );
  }
}

export default Characters;

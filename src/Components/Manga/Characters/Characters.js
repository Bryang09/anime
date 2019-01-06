import React, { Component } from "react";

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
            <h4>{res.name}</h4>
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
          Search Characters
        </h4>
        <h3 style={{ display: "none" }}>Characters</h3>

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

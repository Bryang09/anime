import React, { Component } from "react";

class Manga extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Manga">
        <h1>Manga</h1>
      </div>
    );
  }
}

export default Manga;

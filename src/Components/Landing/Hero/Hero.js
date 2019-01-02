import React, { Component } from "react";

import "./Hero.scss";

class Hero extends Component {
  state = {
    fullScreen: true
  };
  render() {
    return (
      <div
        className="Hero"
        style={
          this.state.fullScreen === false
            ? { height: "40vh" }
            : { height: "100vh" }
        }
      >
        <h1>Welcome To Bryan's Anime Listings</h1>
        <h3
          onClick={() => this.setState({ fullScreen: !this.state.fullScreen })}
        >
          Discover Anime Now!
        </h3>
      </div>
    );
  }
}

export default Hero;

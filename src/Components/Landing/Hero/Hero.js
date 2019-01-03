import React, { Component } from "react";

import "./Hero.scss";

class Hero extends Component {
  state = {
    fullScreen: true
  };
  render() {
    // let cover = this.props.cover;
    // let toggle = this.props.toggle;

    return (
      <div
        className="Hero"
        // style={cover === false ? { height: "40vh" } : { height: "100vh" }}
        style={{ height: "40vh" }}
      >
        <h1>Welcome To Bryan's Anime Listings</h1>
        {/* <h3 onClick={toggle}>Discover Anime Now!</h3> */}
      </div>
    );
  }
}

export default Hero;

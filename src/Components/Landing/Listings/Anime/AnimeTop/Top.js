import React, { Component } from "react";
import axios from "axios";
import { Request } from "../../../../../Request";
import Display from "../../ListDisplay/ListingDisplay";
import Zoom from "react-reveal/Zoom";

import "./Top.scss";

class Top extends Component {
  state = {
    top: [],
    anime: true
  };

  componentDidMount = () => {
    // TOP ANIME
    axios
      .get(`${Request}/top/anime/1/bypopularity`)
      .then(res => this.setState({ top: res.data.top }))
      .catch(err => console.log(err));
  };

  onHover = () => {
    this.setState({ overlay: !this.state.overlay });
  };

  render() {
    console.log(this.props);
    let cover = this.props.cover;
    return (
      <div
        className="categoryContainer"
        style={cover === false ? { display: "block" } : { display: "none" }}
      >
        <Zoom>
          <h2>Top Anime</h2>
          <Display results={this.state.top} anime={this.state.anime} />
        </Zoom>
      </div>
    );
  }
}

export default Top;

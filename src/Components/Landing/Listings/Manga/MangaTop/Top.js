import React, { Component } from "react";
import axios from "axios";
import { Request } from "../../../../../Request";
import Display from "../../ListDisplay/ListingDisplay";
import Zoom from "react-reveal/Zoom";

class Top extends Component {
  state = {
    top: []
  };

  componentDidMount = () => {
    // TOP MANGA
    axios
      .get(`${Request}/top/manga/1/bypopularity`)
      .then(res => this.setState({ top: res.data.top }))
      .catch(err => console.log(err));
  };

  render() {
    let cover = this.props.cover;
    return (
      <div
        className="categoryContainer"
        style={cover === false ? { display: "block" } : { display: "none" }}
      >
        <Zoom>
          <h2>Top Manga</h2>
          <Display results={this.state.top} />
        </Zoom>
      </div>
    );
  }
}

export default Top;

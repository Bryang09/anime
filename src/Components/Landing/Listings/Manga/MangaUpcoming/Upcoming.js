import React, { Component } from "react";
import axios from "axios";
import { Request } from "../../../../../Request";
import Display from "../../ListDisplay/ListingDisplay";
import Zoom from "react-reveal/Zoom";

class UpcomingManga extends Component {
  state = {
    upcoming: []
  };

  componentDidMount = () => {
    // TOP MANGA UPCOMING
    axios
      .get(`${Request}/top/manga/1/manga`)
      .then(res => this.setState({ upcoming: res.data.top }))
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
          <h2>Upcoming Manga</h2>
          <Display results={this.state.upcoming} />
        </Zoom>
      </div>
    );
  }
}

export default UpcomingManga;

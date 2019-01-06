import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import { Request } from "../../../Request";
import Nav from "../../Nav/Nav";

class Anime extends Component {
  state = {
    results: [],
    nav: false
  };

  componentDidMount = () => {
    const query = this.props.match.params.query;

    axios
      .get(`https://api.jikan.moe/v3/search/manga?q=${query}&page=1`)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  onNav = () => {
    this.setState({ nav: !this.state.nav });
  };

  render() {
    const query = this.props.match.params.query;
    console.log(this.state.results);

    const results = this.state.results.map(res => {
      return (
        <div className="singleResult" key={res.mal_id}>
          <Link to={`/manga/${res.mal_id}`}>
            <div
              className="img"
              style={{ backgroundImage: `url(${res.image_url})` }}
            >
              <h5>{res.type}</h5>
            </div>
          </Link>
          <div className="text">
            <div className="title">
              <h3>{res.title}</h3>
            </div>
            <div className="title episodes">
              <h3>Chapters: {res.chapters}</h3>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="Anime">
        <Nav nav={this.state.nav} onNav={this.onNav} />
        <h1>
          Searching For{" "}
          <span style={{ textTransform: "capitalize" }}>{query}</span>
        </h1>
        {results}
      </div>
    );
  }
}

export default Anime;

import React, { Component } from "react";

import "./Anime.scss";

import axios from "axios";
import { Link } from "react-router-dom";

import { Request } from "../../../Request";
import Nav from "../../Nav/Nav";

class Anime extends Component {
  state = {
    results: []
  };

  componentDidMount = () => {
    const query = this.props.match.params.query;

    axios
      .get(`${Request}/search/anime?q=${query}&page=1`)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    const query = this.props.match.params.query;

    const results = this.state.results.map(res => {
      return (
        <div className="singleResult" key={res.mal_id}>
          <Link to={`/anime/${res.mal_id}`}>
            <div
              className="img"
              style={{ backgroundImage: `url(${res.image_url})` }}
            >
              <h5
                style={
                  res.type === "TV"
                    ? { background: "#00c534", border: "1px solid #00c534" }
                    : res.type === "Special"
                    ? { background: "#2a80ec", border: "1px solid #2a80ec" }
                    : res.type === "Movie"
                    ? { background: "#fb4444", border: "1px solid #fb4444" }
                    : res.type === "OVA"
                    ? { background: "#e459e6", border: "1px solid #e459e6" }
                    : null
                }
              >
                {res.type}
              </h5>
            </div>
          </Link>
          <div className="text">
            <div className="title">
              <h3>{res.title.substring(0, 150)}</h3>
            </div>
            <div className="title episodes">
              <h3>Episodes: {res.episodes}</h3>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="Anime">
        <Nav />
        <h1>
          Searching For{" "}
          <span
            style={{
              textTransform: "capitalize",
              fontWeight: 400,
              color: "#00fffe"
            }}
          >
            {query}
          </span>
        </h1>
        {results}
      </div>
    );
  }
}

export default Anime;

import React, { Component } from "react";
import { Request } from "../../../Request";
import axios from "axios";

import AnimeTop from "./Anime/AnimeTop/Top";
import AnimeUpcoming from "./Anime/AnimeUpcoming/Upcoming";

import MangaTop from "./Manga/MangaTop/Top";
import MangaUpcoming from "./Manga/MangaUpcoming/Upcoming";

class HandleRequest extends Component {
  state = {
    animeTop: [],
    animeUpcoming: [],
    mangaTop: [],
    mangaUpcoming: []
  };

  componentDidMount = () => {
    // TOP ANIME
    axios
      .get(`${Request}/top/anime/1/bypopularity`)
      .then(res => this.setState({ animeTop: res.data.top }))
      .catch(err => console.log(err));
    // TOP ANIME UPCOMING
    axios
      .get(`${Request}/top/anime/1/upcoming`)
      .then(res => this.setState({ animeUpcoming: res.data.top }))
      .catch(err => console.log(err));

    // TOP MANGA
    axios
      .get(`${Request}/top/manga/1/bypopularity`)
      .then(res => this.setState({ mangaTop: res.data.top }))
      .catch(err => console.log(err));
    // TOP MANGA UPCOMING
    axios
      .get(`${Request}/top/manga/1/manga`)
      .then(res => this.setState({ mangaUpcoming: res.data.top }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div style={{ display: "none" }}>
        {this.state.animeTop !== null ? (
          <AnimeTop results={this.state.animeTop} />
        ) : (
          setTimeout()
        )}
        <AnimeUpcoming animeUpcoming={this.state.animeUpcoming} />
        <MangaTop mangaTop={this.state.mangaTop} />
        <MangaUpcoming mangaUpcoming={this.state.mangaUpcoming} />
      </div>
    );
  }
}

export default HandleRequest;

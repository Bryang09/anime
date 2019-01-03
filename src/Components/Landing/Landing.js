import React, { Component } from "react";

import Hero from "./Hero/Hero";
import Top from "./Listings/Anime/AnimeTop/Top";
import UpcomingAnime from "./Listings/Anime/AnimeUpcoming/Upcoming";
import TopManga from "./Listings/Manga/MangaTop/Top";
import UpcomingManga from "./Listings/Manga/MangaUpcoming/Upcoming";

class Landing extends Component {
  state = {
    cover: true
  };

  onCover = () => {
    this.setState({ cover: !this.state.cover });
  };

  render() {
    return (
      <div style={{ background: "#333" }}>
        <Hero cover={this.state.cover} toggle={this.onCover} />
        <Top cover={this.state.cover} />
        <UpcomingAnime cover={this.state.cover} />
        <TopManga cover={this.state.cover} />
        <UpcomingManga cover={this.state.cover} />
        {/* <HandleRequest /> */}
      </div>
    );
  }
}

export default Landing;

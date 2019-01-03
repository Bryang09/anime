import React, { Component } from "react";
import { Request } from "../../Request";
import axios from "axios";
import Hero from "./Hero/Hero";
import Episodes from "./Episodes/Episodes";

import "./Anime.scss";

class Anime extends Component {
  state = {
    watching: null,
    planWatch: null,
    completed: null,
    pictures: [],
    episodes1: [],
    episodes2: [],
    trailer: "",
    title: "",
    episodes: "",
    status: "",
    rating: "",
    rank: "",
    fans: "",
    synopsis: ""
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`${Request}/anime/${id}`)
      .then(res =>
        this.setState({
          trailer: res.data.trailer_url,
          title: res.data.title,
          episodes: res.data.episodes,
          status: res.data.status,
          rating: res.data.rating,
          rank: res.data.rank,
          fans: res.data.members,
          synopsis: res.data.synopsis
        })
      )
      .catch(err => console.log(err));
    axios
      .get(`${Request}/anime/${id}/stats`)
      .then(res =>
        this.setState({
          completed: res.data.completed,
          planWatch: res.data.plan_to_watch,
          watching: res.data.watching
        })
      )
      .catch(err => console.log(err));

    axios
      .get(`${Request}/anime/${id}/pictures`)
      .then(res =>
        this.setState({
          pictures: res.data.pictures
        })
      )
      .catch(err => console.log(err));
    axios
      .get(`${Request}/anime/${id}/episodes`)
      .then(res =>
        this.setState({
          episodes1: res.data.episodes
        })
      )
      .catch(err => console.log(err));
    axios
      .get(`${Request}/anime/${id}/episodes/2`)
      .then(res =>
        this.setState({
          episodes2: res.data.episodes
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const state = this.state;
    console.log(this.props);

    const information = [
      // prettier-ignore
      {id: 0, icon: 'https://img.icons8.com/metro/50/fb7ea1/visible.png', text: state.watching, label: 'Watching'},
      // prettier-ignore
      {id: 7, icon: 'https://img.icons8.com/ios/50/fb7ea1/naruto-filled.png', text: state.fans, label: 'Fans'},
      // prettier-ignore
      {id: 2, icon: 'https://img.icons8.com/ios-glyphs/50/fb7ea1/ok.png', text: state.completed, label: 'Completed'},
      // prettier-ignore
      {id: 5, icon: 'https://img.icons8.com/ios/50/fb7ea1/rating-filled.png', text: state.rating, label: 'Rating' },

      // prettier-ignore
      {id: 3, icon: 'https://img.icons8.com/metro/50/fb7ea1/checklist.png', text: state.episodes, label: 'Episodes'},
      // prettier-ignore
      {id: 4, icon: 'https://img.icons8.com/ios/50/fb7ea1/tv-filled.png', text: state.status, label: 'Status' },

      // prettier-ignore
      {id: 1, icon: 'https://img.icons8.com/windows/50/fb7ea1/overtime.png', text: state.planWatch, label: 'Plan To Watch'},
      // prettier-ignore
      {id: 6, icon: 'https://img.icons8.com/ios/50/fb7ea1/leaderboard-filled.png', text: state.rank, label: 'Rank'}
    ];

    console.log(this.state);

    return (
      <div className="Anime Container">
        {this.state.pictures.length > 2 ? (
          <Hero
            info={information}
            trailer={this.state.trailer}
            title={this.state.title}
            synopsis={this.state.synopsis}
            pic={this.state.pictures}
          />
        ) : (
          <Hero
            info={information}
            trailer={this.state.trailer}
            title={this.state.title}
            synopsis={this.state.synopsis}
            pic={undefined}
          />
        )}
        {this.state.pictures.length > 2 ? (
          <Episodes
            episodes1={this.state.episodes1}
            pic={this.state.pictures}
          />
        ) : (
          <Episodes episodes1={this.state.episodes1} pic={undefined} />
        )}
      </div>
    );
  }
}

export default Anime;

import React, { Component } from "react";

import axios from "axios";
import { Request } from "../../Request";

import Hero from "./Hero/Hero";
import Characters from "./Characters/Characters";

class Manga extends Component {
  state = {
    reading: null,
    planRead: null,
    completed: null,
    pictures: [],
    reviews: [],
    recommendations: [],

    title: "",
    chapters: "",
    volumes: "",
    status: "",
    rating: "",
    rank: "",
    fans: "",
    synopsis: "",
    characters: [],
    page2: false,
    page1: true
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`${Request}/manga/${id}`)
      .then(res =>
        this.setState({
          title: res.data.title,
          chapters: res.data.chapters,
          volumes: res.data.volumes,
          status: res.data.status,
          rating: res.data.score,
          rank: res.data.rank,
          fans: res.data.members,
          synopsis: res.data.synopsis
        })
      )
      .catch(err => console.log(err));
    axios
      .get(`${Request}/manga/${id}/stats`)
      .then(res =>
        this.setState({
          completed: res.data.completed,
          planRead: res.data.plan_to_read,
          reading: res.data.reading
        })
      )
      .catch(err => console.log(err));
    axios
      .get(`${Request}/manga/${id}/characters`)
      .then(res => this.setState({ characters: res.data.characters }))
      .catch(err => console.log(err));

    axios
      .get(`${Request}/manga/${id}/pictures`)
      .then(res =>
        this.setState({
          pictures: res.data.pictures
        })
      )
      .catch(err => console.log(err));
    axios
      .get(`${Request}/manga/${id}/reviews`)
      .then(res =>
        this.setState({
          reviews: res.data.reviews
        })
      )
      .catch(err => console.log(err));
    axios
      .get(`${Request}/manga/${id}/recommendations`)
      .then(res =>
        this.setState({
          recommendations: res.data.recommendations
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    const state = this.state;
    const information = [
      // prettier-ignore
      {id: 0, icon: 'https://img.icons8.com/metro/50/fb7ea1/visible.png', text: state.reading, label: 'Reading'},
      // prettier-ignore
      {id: 7, icon: 'https://img.icons8.com/ios/50/fb7ea1/naruto-filled.png', text: state.fans, label: 'Fans'},
      // prettier-ignore
      {id: 2, icon: 'https://img.icons8.com/ios-glyphs/50/fb7ea1/ok.png', text: state.completed, label: 'Completed'},
      // prettier-ignore
      {id: 5, icon: 'https://img.icons8.com/ios/50/fb7ea1/rating-filled.png', text: state.rating, label: 'Rating' },

      // prettier-ignore
      {id: 3, icon: "https://img.icons8.com/ios/50/fb7ea1/book-filled.png", text: state.volumes, label: 'Volumes'},
      // prettier-ignore
      {id: 4, icon: 'https://img.icons8.com/ios/50/fb7ea1/tv-filled.png', text: state.status, label: 'Status' },

      // prettier-ignore
      {id: 1, icon: 'https://img.icons8.com/ios/50/fb7ea1/literature-filled.png', text: state.chapters, label: 'Chapters'},
      // prettier-ignore
      {id: 6, icon: 'https://img.icons8.com/ios/50/fb7ea1/leaderboard-filled.png', text: state.rank, label: 'Rank'}
    ];

    console.log(this.state);
    return (
      <div className="Manga">
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
        {this.state.staff.length > 2 ? (
          <Characters
            characters={this.state.chapters}
            props={this.props.match}
          />
        ) : null}
      </div>
    );
  }
}

export default Manga;

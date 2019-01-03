import React, { Component } from "react";
import { Request } from "../../Request";
import axios from "axios";

class Anime extends Component {
  state = {
    votes: [],
    watching: null,
    planWatch: null,
    completed: null,
    pictures: [],
    episodes1: [],
    episodes2: []
  };

  componentWillMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`${Request}/anime/${id}/stats`)
      .then(res =>
        this.setState({
          votes: res.data.scores,
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
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="Anime">
        <h1>Anime</h1>
      </div>
    );
  }
}

export default Anime;

import React, { Component } from "react";
import { Request } from "../../../../Request";
import axios from "axios";

import "./VoiceActors.scss";

class VoiceActors extends Component {
  state = {
    characters: []
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`${Request}/anime/${id}/characters_staff`)
      .then(res => this.setState({ characters: res.data.characters }))
      .catch(err => console.log(err));
  };
  render() {
    const character = this.props.match.params.character;
    const realCharacter = parseInt(character, 10);
    const actorsHero = this.state.characters
      .filter(res => res.mal_id === realCharacter)
      .map(res => {
        return (
          <div className="characterHero" key={res.mal_id}>
            <div
              className="characterImg"
              style={{ backgroundImage: `url(${res.image_url})` }}
            />
            <div className="characterText">
              <h1>{res.name}</h1>
            </div>
          </div>
        );
      });

    const actors = this.state.characters
      .filter(res => res.mal_id === realCharacter)
      .map(res =>
        res.voice_actors.map(res => {
          return (
            <div className="actor" key={res.mal_id}>
              <div
                className="actorImg"
                style={{ backgroundImage: `url(${res.image_url})` }}
              />
              <div className="name">
                <h3>
                  <a href={res.url} target="_blank" rel="noopener noreferrer">
                    {res.name}
                  </a>
                </h3>
              </div>
              <div className="language">
                <h3>{res.language}</h3>
              </div>
            </div>
          );
        })
      );

    return (
      <div className="voiceActors">
        <div className="characterPage">{actorsHero}</div>
        <div className="actorsContainer">{actors}</div>
      </div>
    );
  }
}

export default VoiceActors;

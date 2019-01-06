import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Anime from "./Components/Anime/Anime";
import VoiceActors from "./Components/Anime/Actors/VoiceActors/VoiceActors";
import Manga from "./Components/Manga/Manga";
import MangaSearch from "./Components/Search/Manga/Manga";
import AnimeSearch from "./Components/Search/Anime/Anime";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/anime/:id" component={Anime} />
      <Route exact path="/anime/:id/:character" component={VoiceActors} />
      <Route exact path="/manga/:id" component={Manga} />
      <Route exact path="/search/anime/:query" component={AnimeSearch} />
      <Route exact path="/search/manga/:query" component={MangaSearch} />
    </Switch>
  );
};

export default Routes;

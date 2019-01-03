import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Anime from "./Components/Anime/Anime";
import Manga from "./Components/Manga/Manga";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/anime/:id" component={Anime} />
      <Route exact path="/manga/:id" component={Manga} />
    </Switch>
  );
};

export default Routes;

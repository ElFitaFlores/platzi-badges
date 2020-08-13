import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Badges} />
        <Route exact path="/badge/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

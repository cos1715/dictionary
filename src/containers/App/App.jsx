import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home";
import MyVocabulary from "../MyVocabulary";
import NotFound from "../../components/NotFound";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/vocabulary" component={MyVocabulary} />
    {/* <Route path="/tests" component={Cart} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default App;
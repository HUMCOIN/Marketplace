import React from "react";
import { Switch, Route } from "react-router-dom";
import "./main.css";

import NavigationBar from "../NavigationBar";
import { HomePage } from "./Homepage";
import { New, Details } from "../Project";

const homeRoute = () => (
  <Route path="/">
    <HomePage />
  </Route>
);

const createProjectRoute = () => (
  <Route path="/new">
    <New />
  </Route>
);

const detailsRoute = () => (
  <Route path={"/details/:hash"}>
    <Details />
  </Route>
);

function Marketplace() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        {createProjectRoute()}
        {detailsRoute()}
        {homeRoute()}
      </Switch>
    </div>
  );
}

export default Marketplace;

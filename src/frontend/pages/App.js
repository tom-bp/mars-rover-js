import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Photos from "./photos/Photos";
import "./cssreset.css";
import "./App.css";
import Login from "./login/Login";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}


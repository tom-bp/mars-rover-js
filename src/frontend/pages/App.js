import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Photos from "./photos/Photos";
import "./cssreset.css";
import "./App.css";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/photos" component={Photos} />
    </Switch>
  );
}

export default function loginInteraction(){
    return(
        <>
            Username:
            <input type = "text"/>
            Password:
            <input type = "text"/>
            <button>Submit</button>
        </>
    )
}
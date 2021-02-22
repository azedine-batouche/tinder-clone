
import './App.css';
import React   from 'react'
import  Header  from "./Header";
import TinderCard from "./TinderCard";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
      <Router> 
        <Switch>
        <Route path="/chat">
            <h2>I am the chat page</h2>
          </Route>
          <Route path="/">
            <TinderCard/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import React   from 'react'
import  Header  from "./components/header/Header";
import TinderCard from "./components/tinderCard/TinderCard";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./components/chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import Profil from "./components/profil/Profil";


function App() {

  return (
    <div className="App">
  
      <Router> 
        <Switch>
        <Route path="/chat/:person">
        <Header backbutton="/chat"/>
          <ChatScreen />
       
          </Route>
        <Route path="/chat">
        <Header backbutton="/"/>
          <Chats />
          </Route>
          <Route path="/profil">
            <Header/>
            <Profil/>

          </Route>
          <Route path="/">
            <Header/>
            <TinderCard/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

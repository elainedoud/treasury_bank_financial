import React from 'react';
import NavBar from './NavBar';
import Enroll from './Enroll';
import Login from './features/login/Login';
import Checking from './features/checking/Checking';
import './App.css';
import {Route, Switch} from 'react-router-dom'

function MainApp({user}) {

  return (
    <div className="App">
      <header className="App-header">
        <p>Treasury Bank Financial</p>
      </header>
      <Switch>
      <Route exact path="/">
        <NavBar />
      </Route>
      <Route exact path="/enroll">
          <Enroll />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/checking">
        <Checking user={user}/>
      </Route>
    </Switch>
    </div>
  );
}

export default MainApp;

import React from 'react';
import NavBar from './NavBar';
import Enroll from './Enroll';
import Login from './Login';
import Checking from './Checking';
import './App.css';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Treasury Bank Financial</p>
      </header>
      <Switch>
      <NavBar />
      <Route path="/enroll">
          <Enroll />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checking">
        <Checking />
      </Route>
    </Switch>
    </div>
  );
}

export default App;

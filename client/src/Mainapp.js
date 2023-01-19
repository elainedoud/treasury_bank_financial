import React, {useState} from 'react';
import NavBar from './NavBar';
import Enroll from './Enroll';
import Login from './features/login/Login';
import Checking from './features/checking/Checking';
import './App.css';
import {Route, Switch} from 'react-router-dom'

function MainApp() {

  const [nowuser, setnowuser] = useState("") 

  return (
    <div className="App">
      <header className="App-header">
        <p>Treasury Bank Financial</p>
      </header>
      <Switch>
      <Route path="/">
        <NavBar />
      <Route exact path="/enroll">
          <Enroll />
      </Route>
      <Route exact path="/login">
        <Login nowuser={nowuser} setnowuser={setnowuser}/>
      </Route>
      <Route exact path="/checking">
        <Checking nowuser={nowuser} />
      </Route>
      </Route>
    </Switch>
    </div>
  );
}

export default MainApp;

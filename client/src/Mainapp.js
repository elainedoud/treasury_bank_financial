import React, {useState} from 'react';
import NavBar from './NavBar';
import Enroll from './Enroll';
import Checking from './features/checking/Checking';
import Login from './features/Login/Login';
import './App.css';
import {Route, Switch} from 'react-router-dom'

function MainApp() {

  const [nowuser, setnowuser] = useState("") 
  const [user, setUser] = useState({})
  const [newname, setNewname] = useState("")
  const [signedup, setSignedup] = useState(false)
  

  return (
    <div className="App">
      <header>
        <h1 class="header text-warning pt-3">Treasury Bank Financial</h1>
      </header>
      <Switch>
      <Route path="/">
        <NavBar />
      <Route exact path="/enroll">
          <Enroll user={user} setUser={setUser} newname={newname} setNewname={setNewname} 
          signedup={signedup} setSignedup={setSignedup}/>
      </Route>
      <Route exact path="/login">
        <Login user={user} setUser={setUser} nowuser={nowuser} setnowuser={setnowuser}/>
      </Route>
      <Route exact path="/checking">
        <Checking nowuser={nowuser} setnowuser={setnowuser} 
        newname={newname} setNewname={setNewname} signedup={signedup} setSignedup={setSignedup}/>
      </Route>
      </Route>
    </Switch>
    </div>
  );
}

export default MainApp;

import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import Enroll from './Enroll';
import Login from './features/login/Login';
import Checking from './features/checking/Checking';
import './App.css';
import {Route, Switch} from 'react-router-dom'
/*import {useSelector} from 'react-redux'*/

function MainApp() {

  const [nowUser, setNowUser] = useState(null) 

  console.log(nowUser)
  /*const user = useSelector(state => state.login.user)*/


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
        <Login nowuser={nowUser} setnowuser={setNowUser}/>
      </Route>
      <Route exact path="/checking">
        <Checking />
      </Route>
    </Switch>
    </div>
  );
}

export default MainApp;

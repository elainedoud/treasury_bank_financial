import React, {useState, useEffect} from 'react';
import {allLoginData} from './loginSlice';

function Login({user, setUser, nowuser, setnowuser, ...props}){ 

    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState([])
    const [loggedIn, setLoggedIn] = useState(true)
    const [formSubmitted, setFormSubmitted] = useState(false)
    

      useEffect(() => {
        fetch("/me")
        .then(res => {
          if (res.ok) {
            res.json().then(user => {
              setUser(user)
              setnowuser(user)
              setLoggedIn(true)
            }
        )} else {
            setUser({});
            setLoggedIn(false);
          }
        })
        }, []);

 
    const handleLogin = async(e) => {
        e.preventDefault();
        const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, password}),
            });
        const data = await response.json();
                if (data.id){
                    allLoginData(data)
                    setLoggedIn(true)
                } else if (data.errors){
                    setError(errors)
                }
            setFormSubmitted(true);
    }

    useEffect(() => {
      if (formSubmitted) {
          fetch("/me")
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                setUser(user)
                setnowuser(user)
                setLoggedIn(true)
              }
          )} else {
              setUser({});
              setLoggedIn(false);
            }
          });
        }
      },[formSubmitted]);

    const handleChangeUsername = e => setName(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    function handleLogout(e) {
        e.preventDefault();
        setUser({})
        fetch('/logout', {
          method: 'DELETE'
        })
        setLoggedIn(false);
      }

    return (
        <div class="container ps-4 pe-4">
        <form class="pt-3" onSubmit={(e) => {
          handleLogin(e);
        }}>
          <div class="login_padding">
            <label>Login:</label>
          </div>
            <div class="login_padding">
              <input 
            type="text"
            onChange = {handleChangeUsername}
            value = {name}
            placeholder = 'name' 
            className="login"
            user={user}/>
            </div>
            <div class="login_padding">
            <input 
            type="password" 
            onChange = {handleChangePassword}
            value = {password}
            placeholder = 'password' 
            className="login"
            class="form control"/>
            </div>
        <div class="login_padding">
        <button type="submit" className="logbutton" class="bg-warning">Login</button>
        </div>
        <div class="login_padding">
        <button onClick={handleLogout} className="logbutton" class="bg-warning">Logout</button>
            <div class="container pt-3"> 
        { loggedIn ? <p>You are logged in </p> : <p>You are logged out</p> } 
            </div>
        </div>
        </form>
            
        </div>
    );
}

export default Login
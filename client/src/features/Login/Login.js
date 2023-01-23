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
        <div>
        <form onSubmit={(e) => {
          handleLogin(e);
        }}>
            <p>Login:</p>
            <input 
            type="text"
            onChange = {handleChangeUsername}
            value = {name}
            placeholder = 'name' 
            className="login"
            user={user}
            />
            <input 
            type="text" 
            onChange = {handleChangePassword}
            value = {password}
            placeholder = 'password' 
            className="login"/>
        <button type="submit" className="logbutton">Login</button>
        <button onClick={handleLogout} className="logbutton">Logout</button>
        { loggedIn ? <p>You are logged in </p> : <p>You are logged out</p> } 
        </form>
            
        </div>
    );
}

export default Login
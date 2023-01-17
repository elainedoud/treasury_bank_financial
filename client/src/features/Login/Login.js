import React, {useState, useEffect} from 'react';
import {allLoginData} from './loginSlice';

function Login(){ 

    const [user, setUser] = useState({})
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState([])
    const [loggedIn, setLoggedIn] = useState(true)

    useEffect(() => {
        fetch("/me")
        .then (res =>{
          if (res.ok) {
            res.json()
            .then (user => {
              setUser (user)
              setLoggedIn(true)
            })
          } else {
            setUser({})
            setLoggedIn(false)
          }
        })
        }, [])

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
    }

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
        <form onSubmit={handleLogin} user={user} key={user.id}>
            <p>Login:</p>
            <input 
            type="text"
            onChange = {handleChangeUsername}
            value = {name}
            placeholder = 'name' 
            className="login"/>
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
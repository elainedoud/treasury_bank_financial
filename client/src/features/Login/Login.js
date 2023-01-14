import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchLogins, allLoginData} from './loginSlice';

const Login = () => { 

    const dispatch = useDispatch ()
    const {allLoginData} = useSelector(state => state.loginSlice)

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState([])

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({fetchLogins}),
            });
            const data = await response.json();
                if (data.id){
                    allLoginData(data)
                } else if (data.errors){
                    setError(errors)
                }
    }};

    const handleChangeUsername = e => setName(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)


    return (
        <div>
        <form onSubmit={handleLogin}>
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
        <button type="submit" class="logbutton">Login</button>
        </form>
        </div>
    );
}

export default Login
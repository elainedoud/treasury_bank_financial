import React, {useState} from 'react';

function Enroll ({user, setUser, newname, setNewname, signedup, setSignedup}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    
    function handleSubmit(e){
        e.preventDefault();
        fetch("/enroll", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newname,
                email,
                password
            }),
        }).then((r) =>{
            if (r.ok) {
                r.json().then((user) => setUser(user));
                setSignedup(true);
            } else {
                r.json().then((error) => setErrors(error.errors))
            }
        })

    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Open an account with Treasury Bank Financial: </p>
                    <label htmlFor="full name">Full Name: </label>
                    <input 
                        type="text"
                        id="full name"
                        value={newname}
                        onChange={(e) => setNewname(e.target.value)}
                        placeholder="First and Last Name"/>
                    <label htmlFor="email address">Email Address: </label>
                    <input 
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                    />
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"/>
                    <button type="submit">Enroll</button>
                </form>
            </div>
            <div>
                {signedup ? <p>Congratulations! You have opened a checking account with us</p> : null}
            </div>
        </div>
    )
}

export default Enroll
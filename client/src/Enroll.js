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
                <h5 class="header pt-3 text-start ps-3">Open an account with Treasury Bank Financial: </h5>
            <div class="container">
                <form onSubmit={handleSubmit}>
                    <div class="form-group text-start">
                        <label htmlFor="full name" class="form label">Full Name: </label>
                        <input 
                        type="text"
                        id="full name"
                        value={newname}
                        onChange={(e) => setNewname(e.target.value)}
                        placeholder="First and Last Name"
                        class="form cotrol"/>
                    </div>
                    <div class="form-group text-start">
                        <label htmlFor="email address" class="form label">Email Address: </label>
                        <input 
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        class="form cotrol"
                    />
                    </div>
                    <div class="form-group text-start">
                        <label htmlFor="password" class="form label">Password: </label>
                        <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        class="form cotrol"/>
                    <button type="submit" class="bg-warning">Enroll</button>
                    </div>
                </form>
            </div>
            <div>
                {signedup ? <p>Congratulations! You have opened a checking account with us</p> : null}
            </div>
        </div>
    )
}

export default Enroll
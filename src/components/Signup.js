import React, { useState } from 'react';


const Signup = () => {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSignup = e => {
        e.preventDefault();
        alert("Sign up successful! Check your email (just faking it)")
    }

    return (
        <div className="signup-wrapper">
            <h1>Sign up to add and request books</h1>
            <form onSubmit={handleSignup} className="form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={e => setUserName(e.target.value)}/>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                <div>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
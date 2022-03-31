import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
// import FailedLogin from './FailedLogin';

const creds = require("./credentials.json");

async function loginUser(credentials) {
  if (creds[credentials.username] === credentials.password) {
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log("token", token);
    if (token) {
      setToken(token);
    } else {
      alert("LOGIN FAILED");
    }
  };

    return (
        <div className="login-wrapper">
            <h1>Log in to add books on the shelf or to request books</h1>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={e => setUserName(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;

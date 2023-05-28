import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios"
import { DataContext } from "../Context/DataContext";

const Login = () => {
  const {setAuth} = useContext(DataContext)
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    userRef.current.focus()
  }, [])


  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true)
    try{
      const response = await axios.post("/api/auth/login" , 
      {
        email : user, 
        password : pwd
      }
       , 
      {
        headers: { 
          'Accept': 'application/json',
          "Content-Type": "application/json" }
      })
      const accessToken = response?.data?.encodedToken
      setAuth({ user, pwd,  accessToken });
      setUser('');
      setPwd('');
      setSuccess(true)
    }catch(err){
      if (!err?.response) {
        setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
    } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
    } else {
        setErrMsg('Login Failed');
    }
      errRef.current.focus();
    }
  };

  return (
    <div className="Login">
      {success ? (
        <div className="login_section">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to = "/">Go to Home</Link>
          </p>
        </div>
      ) : (
        <div  className="login_section">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input
              id="username"
              type="text"
              autoComplete="off"
              value={user}
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <label htmlFor="password">Password :</label>
            <input
              id="password"
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

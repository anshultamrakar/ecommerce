import React from "react";
import { useEffect , useState } from "react";
import { Link , useNavigate , useLocation  } from "react-router-dom";
import axios from "axios"
import useAuth from "../hook/useAuth";
import { toast } from "react-toastify";



const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  

  const {setAuth} = useAuth()

  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [pwd, setPwd] = useState("");
  

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      localStorage.setItem("token" , accessToken)
      toast.success("Login succesfull")
      setAuth({ user, pwd, accessToken });
      setUser('');
      setPwd('');
      navigate(from , {replace :true})
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
    }
  };


   const handleGuestLogin = () => {
    setUser("Anshul")
    setPwd("anshul@123#")
   }

  return (
    <div className="Login">
        <div  className="login_section">
        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input
              id="username"
              type="text"
              autoComplete="off"
              value={user}
              autoFocus
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
            <button onClick={handleGuestLogin}>Guest Login</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
    </div>
  );
};

export default Login;

import { useEffect } from "react";
import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  //latestChange mar14 9:51
  // const { dispatch, error } = useContext(AuthContext);
  const authContext = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, authContext.dispatch);
  };

  useEffect(()=>{
    setHasError(authContext.error);
  },[authContext.error])
  const warningDiv = () => {
    return (
      <div>
        <p>WE CANNOT FUCKING FIND THIS ACCOUNT INFORMATION YOU IDIOT!</p>
      </div>
    )
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          {authContext.error ? warningDiv() : null}
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? <a href="/register">Sign up now.</a>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}

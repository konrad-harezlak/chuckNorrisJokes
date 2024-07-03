import React,{useState,useEffect} from "react";
import "../assets/styles/login.scss";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Decoration } from "../assets/images/decoration.svg";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() =>{
    const validateForm = () => {
      const button = document.getElementById(
        "form-submit"
      ) as HTMLButtonElement | null;
      if (button) {
        if (!email || !password) {
          button.disabled = true;
          button.style.backgroundColor = "rgba(0,0,0,0.12)";
        } else {
          button.disabled = false;
          button.style.backgroundColor = "#5b64b4";
        }
      }
    };
    validateForm()
  },[email,password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("działa");
  };
  return (
    <div className="login-container">
      <header>
        <Logo />
      </header>
      <main>
        <h1>Explore "Chuck Jokes" with us!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              placeholder="Type your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button id="form-submit" type="submit">
            CREATE ACCOUNT
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in here.</Link>
        </p>
      </main>
      <footer>
        “Chuck Norris can login without signing up, on any website.”
      </footer>
      <Decoration id="left-decoration" className="decoration-icon left"  />
      <Decoration id="right-decoration" className="decoration-icon right" />
    </div>
  );
};

export default Register;

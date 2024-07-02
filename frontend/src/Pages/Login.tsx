import React from "react";
import "../assets/styles/login.scss";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="home">
      <header>
        <Logo />
      </header>
      <main>
        <h1>Explore "Chuck Jokes" with us!</h1>
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button type="submit">LOG IN</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign up here.</Link>
        </p>
      </main>
      <footer>
        “Chuck Norris can login without signing up, on any website.”
      </footer>
    </div>
  );
};

export default Login;

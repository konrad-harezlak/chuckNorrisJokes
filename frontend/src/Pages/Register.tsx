import React from "react";
import "../assets/styles/login.scss";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="home">
      <header>
        <Logo />
      </header>
      <main>
        <h1>Explore "Chuck Jokes" with us!</h1>
        <form>
            <label htmlFor="email">E-mail</label>
          <input id="email" placeholder="Type your email" />
          <label htmlFor="password">Password</label>
          <input id="password" placeholder="Type your password" type="password" />
          <button type="submit">CREATE AN ACCOUNT</button>
        </form>
        <p>
          Already have an account? <Link to="/register">Log in here.</Link>
        </p>
      </main>
      <footer>
        “Chuck Norris can login without signing up, on any website.”
      </footer>
    </div>
  );
};

export default Register;

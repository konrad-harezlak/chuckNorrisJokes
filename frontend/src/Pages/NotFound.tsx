import React from "react";
import "../assets/styles/login.scss";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="home">
      <header>
        <Logo />
      </header>
      <main>
        <h1>Page has been not found!</h1>
        <p>
          <Link to="/login">Log in here.</Link>
        </p>
      </main>
      <footer>
        “Chuck Norris can login without signing up, on any website.”
      </footer>
    </div>
  );
};

export default NotFound;

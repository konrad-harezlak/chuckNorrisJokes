import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import '../assets/styles/myJokes.scss'


const MyJokes: React.FC = () => {
  return (
    <div className="home-container">
    <aside>
      <div>
        <Logo />
        <Link to="/home">
          <h3>RANDOM JOKE</h3>
        </Link>
        <Link to="/myjokes">
          <h3 id="selected_page">MY JOKES</h3>
        </Link>
        <Link to="/addjoke">
          <h3>ADD JOKE</h3>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <h3>LOG OUT</h3>
        </Link>
        <p>made with Chuck by Chuck - 2024</p>
      </div>
    </aside>
      <main>
        <h1>My jokes list</h1>
      </main>
    </div>
  );
};

export default MyJokes;

import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "../assets/styles/home.scss";
const Home: React.FC = () => {
  return (
    <div className="home-container">
      <aside>
        <div>
          <Logo />
          <Link to="/home">
            <h3 id="selected_page">RANDOM JOKE</h3>
          </Link>
          <Link to="/myjokes">
            <h3>MY JOKES</h3>
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
        <h1> Get your random joke</h1>
        <p>"joke"</p>
        <label htmlFor="personateInput">Impersonate</label>
        <input
          id="personateInput"
          placeholder="Impersonate Chuck Norris"
        ></input>
        <label htmlFor="category">Categories</label>
        <select id="category">
          <option>Category</option>
        </select>
        <button></button>
        <button></button>
      </main>
    </div>
  );
};

export default Home;

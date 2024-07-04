import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "../assets/styles/home.scss";
import chuck from "../assets/images/chuck.png";

const Home: React.FC = () => {
  const [name, setName] = useState("Chuck Norris");
  return (
    <div className="home-container">
      <aside>
        <div>
          <Logo />
          <Link to="/">
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
        <p>joke- {name}-joke</p>
        <div className="input-container">
          <div className="form-group first">
            <label htmlFor="personateInput">Impersonate</label>
            <input
              id="personateInput"
              placeholder="Impersonate Chuck Norris"
              onChange={(e)=>setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group second">
            <label htmlFor="category">Categories</label>
            <select id="category">
              <option>Categories</option>
            </select>
          </div>
          <div className="button-container">
            <button className="btn-first">DRAW A RANDOM {name} JOKE</button>
            <button className="btn-second">SAVE THIS JOKE</button>
          </div>
        </div>
        <div className="decoration-image">
          <img src={chuck} alt="Chuck Norris" />
        </div>
      </main>
    </div>
  );
};

export default Home;

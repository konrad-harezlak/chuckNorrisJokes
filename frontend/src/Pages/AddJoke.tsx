import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import '../assets/styles/addJoke.scss';
const AddJoke: React.FC = () => {
  return (
    <div className="home-container">
      <aside>
        <div>
          <Logo />
          <Link to="/">
            <h3>RANDOM JOKE</h3>
          </Link>
          <Link to="/myjokes">
            <h3>MY JOKES</h3>
          </Link>
          <Link to="/addjoke">
            <h3 id="selected_page">ADD JOKE</h3>
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
        <h1>Add joke</h1>

        <form>
          <label>Joke</label>
          <input placeholder="Type your joke here"></input>
          <button> Add Joke</button>
        </form>
      </main>
    </div>
  );
};

export default AddJoke;

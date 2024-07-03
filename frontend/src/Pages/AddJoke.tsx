import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import '../assets/styles/addJoke.scss';
const AddJoke: React.FC = () => {
  return (
    <div className="home">
      <aside>
        <Logo />
        <Link to="/home">RANDOM JOKE</Link>
        <Link to="/myjokes">MY JOKES</Link>
        <Link to="/addjoke">ADD JOKE</Link>
        <Link to="/login">LOG OUT</Link>
        <p>made with Chuck by Chuck - 2024</p>
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

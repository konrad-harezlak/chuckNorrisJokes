import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <aside>
        <Logo />
        <Link to="/home">RANDOM JOKE</Link>
        <Link to='/myjokes'>MY JOKES</Link>
        <Link to='/addjoke'>ADD JOKE</Link>
        <Link to='/login'>LOG OUT</Link>
        <p>made with Chuck by Chuck - 2024</p>
      </aside>
      <main>
        <h1> Get your random joke</h1>
        <p>"joke"</p>
        <label htmlFor="personateInput">Impersonate</label>
        <input id="personateInput" placeholder="Impersonate Chuck Norris"></input>
        <select>
            <option>Category</option>
        </select>
        
      </main>
    </div>
  );
};

export default Home;

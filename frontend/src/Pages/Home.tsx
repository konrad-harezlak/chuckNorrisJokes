import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import api from '../services/ApiService';
import "../assets/styles/home.scss";
import chuck from "../assets/images/chuck.png";
import { useAuth } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [name, setName] = useState("Chuck Norris");
  const { logout, isLoggedIn } = useAuth();
  const [response, setResponse] = useState('');
  const [token, setToken] = useState<string | null>(null); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log(storedToken)
    if (storedToken) {
      setToken(storedToken);
      handleDrawJoke();
    }
  }, []);

  const handleLogout = () => {
    try {
      logout();
      navigate("/login");
    } catch (err) {
      console.log("Logout failed: ", err);
    }
  };

  const handleDrawJoke = async () => {
    try {
      const response = await api.get('/jokes/random');
      setResponse(response.data);
      console.log('Draw successful', response.data);
    } catch (err) {
      console.log('Error occurred while drawing joke: ', err);
    }
  };

  const handleSaveJoke = async () => {
    try {
      if (!token) {
        console.log('No token found');
        return;
      }
      console.log(token)
      await api.post('/jokes/save', { content: response }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Joke saved successfully', response);
    } catch (err) {
      console.log('Error occurred while saving joke: ', err);
    }
  };
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
          <Link onClick={handleLogout} to="">
            <h3>LOG OUT</h3>
          </Link>
          <p>made with Chuck by Chuck - 2024</p>
        </div>
      </aside>
      <main>
        <h1> Get your random joke</h1>
        <p id="joke">{response}</p>
        <div className="input-container">
          <div className="form-group first">
            <label htmlFor="personateInput">Impersonate</label>
            <input
              id="personateInput"
              placeholder="Impersonate Chuck Norris"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group second">
            <label htmlFor="category">Categories</label>
            <select id="category">
              <option>Categories</option>
            </select>
          </div>
          <div className="button-container">
            <button className="btn-first" onClick={handleDrawJoke}>
              DRAW A RANDOM {name} JOKE
            </button>
            <button className="btn-second" onClick={handleSaveJoke}>
              SAVE THIS JOKE
            </button>
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

import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import "../assets/styles/addJoke.scss";
import { useAuth } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/ApiService";
const AddJoke: React.FC = () => {
  const [joke, setJoke] = useState("");
  const { logout, isLoggedIn } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = () => {
    try {
      logout();
      navigate("/login");
    } catch (err) {
      console.log("Logout failed: ", err);
    }
  };
  useEffect(() => {
    const validateForm = () => {
      const button = document.getElementById("addJoke") as HTMLButtonElement;
      if (button)
        if (!joke) {
          button.disabled = true;
          button.style.backgroundColor = "rgba(0,0,0,0.12)";
        } else {
          button.disabled = false;
          button.style.backgroundColor = "#5b64b4";
        }
    };
    validateForm();
  }, [joke]);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(joke);
    const storedToken = localStorage.getItem("token");
    try {
      const response = await api.post(
        "/jokes/add",
        { content:joke },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log("Joke added successfully", response);
    } catch (err) {
      console.log("Error occured while adding joke: ", err);
    }
  };
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
          <Link onClick={handleSubmit} to="">
            <h3>LOG OUT</h3>
          </Link>
          <p>made with Chuck by Chuck - 2024</p>
        </div>
      </aside>
      <main>
        <h1>Add joke</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Joke</label>
            <textarea
              id="joke-textarea"
              placeholder="Type your joke here"
              value={joke}
              onChange={(e) => setJoke(e.target.value)}
            ></textarea>
          </div>
          <button id="addJoke"> Add Joke</button>
        </form>
      </main>
    </div>
  );
};

export default AddJoke;

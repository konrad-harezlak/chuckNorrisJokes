import React,{useEffect} from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import '../assets/styles/myJokes.scss'
import {ReactComponent as Delete} from "../assets/images/delete-icon.svg";
import { useAuth } from '../contexts/authContext';
import { Link, useNavigate } from "react-router-dom";

const MyJokes: React.FC = () => {

  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  const handleSubmit = () => {
    try{
      logout();
      navigate('/login')
    } catch(err) {
      console.log('Logout failed: ', err)
    }
  }

  return (
    <div className="home-container">
    <aside>
      <div>
        <Logo />
        <Link to="/">
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
        <Link onClick={handleSubmit} to=''>
          <h3>LOG OUT</h3>
        </Link>
        <p>made with Chuck by Chuck - 2024</p>
      </div>
    </aside>
      <main>
        <h1>My jokes list</h1>
        <ol>
          <li><div>“If Chuck Norris were to travel to an alternate dimension in which there was...<Delete/></div></li>
          <li><div>“If Chuck Norris were to travel to an alternate dimension in which there was...<Delete/></div></li>
        </ol>
      </main>
    </div>
  );
};

export default MyJokes;

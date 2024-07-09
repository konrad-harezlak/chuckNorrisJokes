import React,{useEffect, useState} from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import '../assets/styles/myJokes.scss'
import {ReactComponent as Delete} from "../assets/images/delete-icon.svg";
import { useAuth } from '../contexts/authContext';
import { Link, useNavigate } from "react-router-dom";
import api from "../services/ApiService";

const MyJokes: React.FC = () => {

  const { logout, isLoggedIn } = useAuth();
  const [jokes, setJokes] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/login');
    }
    fetchJokes();
  }, [isLoggedIn, navigate]);
  const handleSubmit = () => {
    try{
      logout();
      navigate('/login')
    } catch(err) {
      console.log('Logout failed: ', err)
    }
  }
  const fetchJokes = async () =>{

    const storedToken = localStorage.getItem('token');
    try{

  
    const response = await api.get('/jokes/my-jokes', {
      headers: {
        Authorization: `Bearer ${storedToken}`
      }
      });
      setJokes(response.data)
    }catch(err){
      console.log('Error occured while fetcing jokes: ', err);
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
          {jokes && jokes.map((joke,index)=>(
            <li><div>{joke}<Delete/></div></li>

          ))}
        </ol>
      </main>
    </div>
  );
};

export default MyJokes;

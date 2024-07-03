import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";
import MyJokes from "./pages/MyJokes";
import AddJoke from "./pages/AddJoke";
import NotFound from "./pages/NotFound";
import './assets/styles/App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/myjokes" Component={MyJokes} />
          <Route path="/addjoke" Component={AddJoke} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="*" Component={NotFound}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

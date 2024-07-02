import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' Component={Home}/>
     </Routes>
    </div>
  );
}

export default App;

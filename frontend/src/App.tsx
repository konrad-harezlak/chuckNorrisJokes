import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyJokes from "./pages/MyJokes";
import AddJoke from "./pages/AddJoke";
import NotFound from "./pages/NotFound";
import "./assets/styles/App.scss";
import { AuthProvider, useAuth } from "./contexts/authContext";

const AppRoutes: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/myjokes"
        element={isLoggedIn ? <MyJokes /> : <Navigate to="/login" />}
      />
      <Route
        path="/addjoke"
        element={isLoggedIn ? <AddJoke /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/register"
        element={isLoggedIn ? <Navigate to="/" /> : <Register />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;

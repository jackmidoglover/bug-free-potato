import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects.jsx";


function App() {
  return (
    <Router>
      <div className="body-wrapper">
      <Home /> 
      <Projects />
      </div>
    </Router>
  );
}

export default App;

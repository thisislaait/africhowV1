import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import Profile from "./pages/User-profile";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/profile" element={Profile} />
      </Routes>
    </Router>
    
  )
}

export default App

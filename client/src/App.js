import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import AddActivity from "./pages/AddActivity"
import Country from "./pages/Country"
import NoPage from "./pages/NoPage"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route exact path="/" element={ <LandingPage />} />        
        <Route exact path="/home" element={ <Home />} />
        <Route exact path="/country/:id" element={<Country/>} />
        <Route path="/newactivity" element={<AddActivity />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css"
const LandingPage = () => {
    return (
      <div className="Container">
      <h1 className="Title">Welcome to Countries App</h1>
    <Link to='/home' className="linklanding">
      <div>
      <button className="ButtonEnter">Click here to enter</button>  
      </div>
    </Link>
  </div>
    );
}
export default LandingPage;
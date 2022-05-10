import React from "react";
import { Link } from "react-router-dom";
import "../styles/CountryCardHome.css";

const CountryCardHome = (props) => {
  return (
    <div className="homecard">
      <div className="homecard-body">
        <Link to={`/country/${props.id}`}>
          <h2 className="countryname">{props.name}</h2>
          <img src={props.image} alt="flag" height={100} width={100} />
          <div className="homecard-info">
          <h3 className="countient"> Continent : {props.continent}</h3>
          <h3 className="nactivities">Activities:  {props.nactivities.length}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default CountryCardHome;

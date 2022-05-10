import React from "react";
import  '../styles/CountryCard.css'

const CountryCard = (props) => {
  return (
    <div className="countrycard">
      <div className="countrycard-body">
        <img className="flag"  src={props.image} alt={props.name} height={100} width={100}/>
        <h1>Name: {props.name}</h1>
        <h1>Continent: {props.continent}</h1>
        <h1>Area: {props.area}</h1>
        <h1>Capital: {props.capital}</h1>
        <h1>Subregion: {props.subregion}</h1>
        <h1>Population: {props.population}</h1>
      </div>
    </div>
  );
};
export default CountryCard;

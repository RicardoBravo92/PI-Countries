import React from "react";
import "../styles/ActivityCard.css"

const ActivityCard = (props) => {
  return (
    <div className="activitycard">
      <div className="activitycard-body">
            <h1>Name: {props.name}</h1>
            <h1>Difficulty {props.difficulty}</h1>
            <h1>Duration : {props.duration}</h1>
            <h1>Season: {props.season}</h1>
      </div>
    </div>
  );
};

export default ActivityCard;

import React from "react";
import HobbyItem from "./HobbyItem";

const HobbiesList = () => {
  const hobbies = ["Reading", "Cycling", "Coding", "Cooking"];
  return (
    <div>
      <h2>My Hobbies:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <HobbyItem key={index} hobby={hobby} />
        ))}
      </ul>
    </div>
  );
};

export default HobbiesList;

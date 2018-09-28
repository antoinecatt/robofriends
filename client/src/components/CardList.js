import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  console.log(robots);
  const card = robots.map(robot => {
    return (
      <Card
        key={robot._id}
        id={robot._id}
        name={robot.name}
        username={robot.username}
        email={robot.email}
      />
    );
  });

  return <div>{card}</div>;
};

export default CardList;

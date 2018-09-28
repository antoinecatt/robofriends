import React from "react";

const Card = ({ name, username, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
      <img src={`https://robohash.org/${id}?set=200x200`} alt="" />
      <h1>{name}</h1>
      <h2>{username}</h2>
      <h3>{email}</h3>
    </div>
  );
};

export default Card;

import React from 'react';
import { useState } from 'react';
import './Item.css';
const Item = ({ card }) => {
  const [showCard, setShowCard] = useState(true);
  const { name, img, options } = card;
  const handleClick = () => {
    setShowCard(!showCard);
  };
  return (
    <div className="card" onClick={handleClick}>
      {showCard ? (
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul>
          {options.map((element, i) => {
            return <li key={i}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;

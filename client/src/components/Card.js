import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link, useNavigate } from 'react-router-dom';


const Card = (props) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  const updateCount = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the card's div
    setCount(count => count + 1);
  };

  const handleCardClick = () => {
    navigate(`/detail/${props.id}`); // Navigate to detail page on card click
  };

  return (
    <div className="Card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <Link to={`/edit/${props.id}`} style={{ textDecoration: 'none' }}>
            <img className="moreButton" alt="edit button" src={more} onClick={(e) => e.stopPropagation()} />
        </Link>
        <h2 className="title">{props.title}</h2>
        <h3 className="author">{ props.author+" mph"}</h3>
        <p className="description">{props.description}</p>
        <button className="betButton" onClick={updateCount}>👍 Like: {count}</button>
    </div>
  );
};

export default Card;
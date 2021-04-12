import React from "react";
import "./Card.css";

const Card = ({ image, character, quote }) => {
  return (
    <div>
      <figure className="QuoteCard">
        <img src={image} alt={character} />
        <figcaption>
          <blockquote>{quote}</blockquote>
          <cite>{character}</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;

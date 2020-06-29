import React from 'react';

function Card({ Cards }) {
  return Cards.map((card) => {
    return (
      <div className="card">
        <div className="card-left">
          <div className="card-header">{card.header}</div>
          <div className="card-text">{card.text}</div>
          <div className="card-tag">{card.tag}</div>
        </div>
        <div className="card-right">
          <div className="card-right-image">IMG</div>
          <div className="card-right-date">{card.date}</div>
        </div>
      </div>
    );
  });
}
export default Card;

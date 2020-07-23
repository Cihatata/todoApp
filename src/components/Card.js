import React from 'react';
import { connect } from 'react-redux';
import '../styles/Card.scss';

function Card({ Cards = ['any'], groupId, deleteCard, editCard }) {
  return Cards.map((card, i) => {
    if (card !== 'any') {
      return (
        <section key={Math.random()} className="card">
          <div className="card__info">
            <div className="card__info--left">
              <div className="card__info--left-header">{card.header}</div>
              <div className="card__info--left--text">{card.text}</div>
              <div className="card__left--tag">{card.tag}</div>
            </div>
            <div className="card__info--right">
              <div className="card__info--right-image">IMG</div>
              <div className="card__info--right-date">{card.date}</div>
            </div>
          </div>
          <div className="card__buttons">
            <button
              onClick={() => {
                deleteCard(groupId, i)}
              }
              type="button"
            >
              Karti Sil
            </button>
            <button
              onClick={() => {
                editCard(card, i, groupId)}
              }
              type="button"
            >
              Kart Duzenle
             </button>
          </div>
        </section>
      );
    }
    return <div key={card}>Etkinlik Yok</div>;
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (groupId, cardIndex) =>
      dispatch({
        type: 'DELETE_CARD',
        groupId,
        cardIndex,
      }),
    editCard: (card, cardIndex, groupId) =>
      dispatch({
        type: 'EDIT_CARD',
        card,
        cardIndex,
        groupId,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Card);

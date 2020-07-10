import React from 'react';
import { connect } from 'react-redux';
import '../styles/Card.scss';

function Card({ Cards = ['any'], groupId, deleteCard }) {
  // console.log(Cards[0]);
  return Cards.map((card, i) => {
    if (card !== 'any') {
      return (
        <section key={Math.random()} className="card">
          <div className="card-info">
            <div className="card-info-left">
              <div className="card-info-left-header">{card.header}</div>
              <div className="card-left-text">{card.text}</div>
              <div className="card-left-tag">{card.tag}</div>
            </div>
            <div className="card-info-right">
              <div className="card-info-right-image">IMG</div>
              <div className="card-info-right-date">{card.date}</div>
            </div>
          </div>
          <div className="card-buttons">
            <button
              onClick={() => {deleteCard(groupId, i)}}
              type="button"
            >
              Karti Sil
            </button>
            <button type="button">Kart Duzenle</button>
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
  };
};

export default connect(null, mapDispatchToProps)(Card);

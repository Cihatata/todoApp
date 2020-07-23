import React from 'react';
import { connect } from 'react-redux';
import I from 'immutable';
import Card from './Card';
import '../styles/Column.scss';
import { Link } from 'react-router-dom';

function Column({ groups, deleteColon, addCardInColumn, navbarButtons }) {
  return groups.map((group, i) => {
    return (
      <section className="column" key={group.groupId + Math.random()}>
        <h2 className="column__header">{group.groupName}</h2>
        <div>
          <button
            onClick={() => deleteColon(i)}
            className="column__button"
            type="button"
          >
            Kolunu Sil
          </button>
          <button
            onClick={() => addCardInColumn(group.groupName)}
            className="column__button"
            type="button"
          >
            Kart Ekle
          </button>
          <Link
            to={`/groups/${group.groupName}`}
            type="button"
            className="column__routeButton"
            onClick={navbarButtons}
          >
            {group.groupName}
          </Link>
        </div>
        <Card groupId={group.groupId} Cards={group.cards} />
      </section>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    groups: I.Map(state).get('groups', ['']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteColon: (id) =>
      dispatch({
        type: 'DELETE_COLON',
        groupId: id,
      }),
    addCardInColumn: (groupName) =>
      dispatch({
        type: 'ADD_CARD_INCOLUMN',
        groupName,
      }),
    navbarButtons: () => 
      dispatch({
        type: 'NAVBAR_BUTTONS'
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);

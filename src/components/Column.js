import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import I from 'immutable';
import Card from './Card';
import '../styles/Column.scss';

function Column({ groups, deleteColon }) {
  return groups.map((group, i) => {
    return (
      <section className="column" key={group.groupId + Math.random()}>
        <h2 className="column-header">{group.groupName}</h2>
        <Link to={`/groups/${group.groupName}`} className="column-button">
          Tum Kartler
        </Link>
        <button
          onClick={() => {deleteColon(i)}}
          className="column-button"
          type="button"
        >
          Kolunu Sil
        </button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);

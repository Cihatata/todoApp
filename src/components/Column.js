import React from 'react';
import Card from './Card';
import '../styles/Column.scss';

function Column({ groups }) {
  console.log(groups);
  return groups.map((group) => {
    return (
      <section className="column" key={group.groupId}>
        <h2 className="column-header">{group.groupName}</h2>
        <Card Cards={group.cards} />
      </section>
    );
  });
}
export default Column;

import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import '../styles/Column.scss';

function Group(props) {
    console.log(props);
  const {
    match: {
      params: { groupName },
    },
    groups,
  } = props;
  const block = groups.filter((group) => {
    return group.groupName === groupName;
  });
  console.log(block);
  if (block.length === 0) {
    return <center><h1>Boyle Bir Grup Yok</h1></center>;
  }
  return block.map((val) => {
    return (
      <center key={Math.random()}>
        <section className="column" key={val.groupId + Math.random()}>
          <h2 className="column__header">{val.groupName}</h2>
          <Card groupId={val.groupId} Cards={val.cards} />
        </section>
      </center>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  };
};
export default connect(mapStateToProps)(Group);

import React from 'react';
import { connect } from 'react-redux';
import I from 'immutable';
import Column from './Column';
import '../styles/Main.scss';

function Main(props) {
  const {
    ifClickEvent,
    ifClickGroup,
    groups,
    eventGroupName,
    eventHeader,
    handleChange,
    eventContent,
    eventDate,
    eventTags,
    handleSubmit,
    groupNameInput,
    addGroup,
    toogleEdit,
    update,
    editGroupId,
    editCardIndex,
    selectedGroupName,
  } = props;
  console.log(groups);
  return (
    <main className="main">
      <Column />
      <div>
        <div className={'main__form' + (ifClickGroup ? '--show' : ' ')}>
          <label htmlFor="GroupName" className="main__form--show-label">
            Grup ismi
            <input
              name="groupNameInput"
              type="text"
              onChange={handleChange}
              className="main__form--show-input"
              value={groupNameInput}
            />
          </label>
          <input
            onClick={addGroup}
            type="Submit"
            value={"Ekle"}
            className="main__form--show-submit"
          />
        </div>
        <form className={'main__form' + (ifClickEvent ? '--show' : ' ')}>
          <label htmlFor="baslik" className="main__form--show-label">
            Etkinlik Basligi
            <input
              name="eventHeader"
              onChange={handleChange}
              type="text"
              className="main__form--show-input"
              value={eventHeader}
            />
          </label>
          <label htmlFor="icerik" className="main__form--show-label">
            Etkinlik Icerigi
            <textarea
              name="eventContent"
              type="text"
              className="main__form--show-input"
              onChange={handleChange}
              value={eventContent}
            />
          </label>
          <label htmlFor="tarih" className="main__form--show-label">
            Tarih
            <input
              onChange={handleChange}
              name="eventDate"
              type="date"
              value={eventDate}
            />
          </label>
          <label htmlFor="etiket" className="main__form--show-label">
            Etiket
            <select onChange={handleChange} name="eventTags" value={eventTags}>
              <option value="2">Dusuk</option>
              <option value="3">Orta</option>
              <option value="4">Yuksek</option>
            </select>
          </label>
          {selectedGroupName && (
            <label htmlFor="group" className="main__form--show-label">
              Grup
              <select
                onChange={handleChange}
                name="eventGroupName"
                className="main__form--show-select"
                value={eventGroupName}
              >
                <option>Kolon seciniz</option>
                {groups.map((val) => {
                  return (
                    <option
                      key={val.groupId + Math.random()}
                      value={val.groupName}
                    >
                      {val.groupName}
                    </option>
                  );
                })}
              </select>
            </label> )
          }
          {toogleEdit ? (
            <button
              onClick={() => update(editGroupId, editCardIndex)}
              className="main__form--show-update"
              type="button"
            >
              Guncelle
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="main__form--show-submit"
              type="button"
            >
              Ekle
            </button>)
          }
        </form>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    // Kod Tekrari Dogrusu nedir ?
    groups: I.Map(state).get('groups', ['']),
    groupNameInput: I.Map(state).get('groupNameInput', ''),
    ifClickGroup: I.Map(state).get('ifClickGroup', false),
    ifClickEvent: I.Map(state).get('ifClickEvent', false),
    toogleEdit: I.Map(state).get('toogleEdit', false),
    eventDate: I.Map(state).get('eventDate', ''),
    eventHeader: I.Map(state).get('eventHeader', ''),
    eventContent: I.Map(state).get('eventContent', ''),
    eventGroupName: I.Map(state).get('eventGroupName', ' '),
    eventTags: I.Map(state).get('eventTags', 2),
    editCardIndex: I.Map(state).get('editCardIndex', ''),
    editGroupId: I.Map(state).get('editGroupId', ''),
    selectedGroupName: I.Map(state).get('selectedGroupName', true),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGroup: () =>
      dispatch({
        type: 'ADD_GROUP',
      }),
    handleChange: (e) =>
      dispatch({
        type: 'HANDLE_CHANGE',
        value: e.target.value,
        name: e.target.name,
      }),
    handleSubmit: () =>
      dispatch({
        type: 'HANDLE_SUBMIT',
      }),
    update: (groupId, cardIndex) =>
      dispatch({
        type: 'UPDATE',
        groupId,
        cardIndex,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

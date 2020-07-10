import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';
// import { handleChange } from '../actions/index';
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
    // groupNameInput,
    addGroup,
  } = props;
  return (
    <main className="main">
      <Column />
      <div>
        <div className={'main-form' + (ifClickGroup ? '-show' : ' ')}>
          <label htmlFor="GroupName" className="main-form-show-label">
            Grup ismi
            <input
              name="groupNameInput"
              type="text"
              onChange={handleChange}
              className="main-form-show-input"
            />
          </label>
          <input
            onClick={addGroup}
            type="Submit"
            value={"Ekle"}
            className="main-form-show-submit"
          />
        </div>
        <form className={'main-form' + (ifClickEvent ? '-show' : ' ')}>
          <label htmlFor="baslik" className="main-form-show-label">
            Etkinlik Basligi
            <input
              name="eventHeader"
              onChange={handleChange}
              type="text"
              className="main-form-show-input"
              value={eventHeader}
            />
          </label>
          <label htmlFor="icerik" className="main-form-show-label">
            Etkinlik Icerigi
            <textarea
              name="eventContent"
              type="text"
              className="main-form-show-input"
              onChange={handleChange}
              value={eventContent}
            />
          </label>
          <label htmlFor="tarih" className="main-form-show-label">
            Tarih
            <input
              onChange={handleChange}
              name="eventDate"
              type="date"
              value={eventDate}
            />
          </label>
          <label htmlFor="etiket" className="main-form-show-label">
            Etiket
            <select onChange={handleChange} name="eventTags" value={eventTags}>
              <option value="2">Dusuk</option>
              <option value="3">Orta</option>
              <option value="4">Yuksek</option>
            </select>
          </label>
          <label htmlFor="group" className="main-form-show-label">
            Grup
            <select
              onChange={handleChange}
              name="eventGroupName"
              className="main-form-show-select"
              value={eventGroupName}
            >
            <option>Kolon seciniz</option>
              {groups.map((val) => {
                return (
                  <option key={val.groupId} value={val.groupName}>
                    {val.groupName}
                  </option>
                );
              })}
            </select>
          </label>
          <button
            onClick={handleSubmit}
            className="main-form-show-submit"
            value="Ekle"
            type="button"
          >
            Ekle
          </button>
        </form>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
    groupNameInput: state.groupNameInput,
    ifClickGroup: state.ifClickGroup,
    ifClickEvent: state.ifClickEvent,
    eventDate: state.eventDate,
    eventHeader: state.eventHeader,
    eventContent: state.eventContent,
    eventGroupName: state.eventGroupName,
    eventTags: state.eventTags,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

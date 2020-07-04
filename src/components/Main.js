// import React, { PureComponent } from 'react';

// class Main extends PureComponent {
//   render() {
//     return (
//       <main className="main">
//         <div>{this.props.groups[0].groupName}</div>
//       </main>
//     );
//   }
// }

// export default Main;

import React from 'react';
import Column from './Column';
import '../styles/Main.scss';

function Main(props) {
  console.log(props);
  const {
    ifClickEvent,
    ifClickGroup,
    groups,
    eventHeader,
    handleChange,
    eventContent,
    eventDate,
    eventTags,
    handleSubmit,
    groupNameInput,
    addGroup,
  } = props;
  return (
    <main className="main">
      <Column groups={groups} />
      <div>
        <div className={'main-form' + (ifClickGroup ? '-show' : ' ')}>
          <label htmlFor="GroupName" className="main-form-show-label">
            Grup ismi
            <input
              name="groupNameInput"
              value={groupNameInput}
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
              value={eventDate}
              name="eventDate"
              type="date"
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
            >
              {groups.map((val) => {
                return <option key={val.groupId} value={val.groupName}>{val.groupName}</option>;
              })}
            </select>
          </label>
          <input onClick={handleSubmit} className="main-form-show-submit" type="submit" value="Ekle" />
        </form>
      </div>
    </main>
  );
}

export default Main;

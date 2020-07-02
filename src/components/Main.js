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
    groups,
    eventHeader,
    handleChange,
    eventContent,
    eventDate,
    eventTags,
    handleSubmit,
  } = props;
  return (
    <main className="main">
      <Column groups={groups} />
      <div>
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
            <select className="main-form-show-select">
              <option value="select">Select a technology</option>
              <option value="Angular">Angular</option>
              <option value="Bootstrap">Bootstrap</option>
              <option value="React">React</option>
            </select>
          </label>
          <input onClick={handleSubmit} className="main-form-show-submit" type="submit" value="Ekle" />
        </form>
      </div>
    </main>
  );
}

export default Main;

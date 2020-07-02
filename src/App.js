import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ifClickEvent: 0,
      eventHeader: '',
      eventContent: '',
      eventTags: '2',
      eventDate: '',
      groups: [
        {
          groupId: 1,
          groupName: 'Okul',
          cards: [
            {
              header: 'Odev',
              text: 'Okul Odevlerini Yapmayi iniutma',
              imgSrc: '',
              date: '29-06-2020',
              tags: 1,
            },
            {
              header: 'Proje Teslimi',
              text: 'Oyun Programlama odevi teslim edilecek',
              imgSrc: '',
              date: '30-06-2020',
              tags: 1,
            },
          ],
        },
        {
          groupId: 2,
          groupName: 'Is',
          cards: [
            {
              header: 'Scrum Bulusmasi',
              text: 'Okul Odevlerini Yapmayi Unutma',
              imgSrc: '',
              date: '29-06-2020',
              tag: 2,
            },
          ],
        },
        {
          groupId: 3,
          groupName: 'Haftasonu',
          cards: [
            {
              header: 'Piknik',
              text:
                'aOkul arkadaslari ile beraber piknige gidilecek. Haftasonuna kadar isleri hallet',
              imgSrc: '',
              date: '01-07-2020',
              tag: 3,
            },
          ],
        },
        {
          groupId: 4,
          groupName: 'E-spor',
        },
      ],
    };
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { groups } = this.state;
    let { eventHeader, eventContent, eventDate, eventTags } = this.state;
    const oldCard = groups[1].cards;
    const newCard = {
      header: eventHeader,
      text: eventContent,
      imgSrc: '',
      date: eventDate,
      tag: eventTags,
    };
    console.log(newCard);
    console.log(oldCard);
    oldCard.push(newCard);
    console.log(oldCard);
    this.setState({ groups });
    eventHeader = ' ';
    eventContent = ' ';
    eventTags = 0;
    e.preventDefault();
  }

  handleChange(e) {
    console.log('teste girdi');
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  showForm() {
    console.log('girdi');
    const { ifClickEvent } = this.state;
    this.setState({ ifClickEvent: !ifClickEvent });
  }

  render() {
    const {
      groups,
      ifClickEvent,
      eventContent,
      eventDate,
      eventHeader,
      eventTags,
    } = this.state;
    return (
      <div className="App">
        <Navbar showForm={this.showForm} />
        <Main
          ifClickEvent={ifClickEvent}
          groups={groups}
          eventContent={eventContent}
          eventDate={eventDate}
          eventHeader={eventHeader}
          eventTags={eventTags}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <h1>Selam</h1>
//     </div>
//   );
// }

export default App;

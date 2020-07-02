import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ifClickEvent: 0,
      ifClickGroup: 0,
      groupNameInput: '',
      eventHeader: '',
      eventContent: '',
      eventTags: '2',
      eventDate: '',
      eventGroupName: 'Okul',
      // todo Buradaki Default deger dinamiklesecek
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
          cards: [],
        },
      ],
    };
    this.showForm = this.showForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGroup = this.addGroup.bind(this);
  }

  handleSubmit(e) {
    const { groups } = this.state;
    const {
      eventHeader,
      eventContent,
      eventDate,
      eventTags,
      eventGroupName,
    } = this.state;
    let index;
    groups.map((val, i) => {
      if (val.groupName === eventGroupName) {
        index = i;
      }
    });
    const oldCard = groups[index].cards;
    const newCard = {
      header: eventHeader,
      text: eventContent,
      imgSrc: '',
      date: eventDate,
      tag: eventTags,
    };
    oldCard.push(newCard);
    console.log(oldCard);
    this.setState({
      groups,
      eventHeader: '',
      eventContent: '',
      eventDate: '',
      eventTags: 2,
      eventGroupName: 'Okul',
      ifClickEvent: 0,
    });
    e.preventDefault();
  }

  addGroup(e) {
    // const { name, value } = e.target;
    const { groups, groupNameInput } = this.state;
    let lastGroup = groups[groups.length - 1];
    const newGroupId = lastGroup.groupId + 1;
    const newGroups = {
      groupId: newGroupId,
      groupName: groupNameInput,
      cards: [],
    };
    groups.push(newGroups);
    this.setState({ groups, groupNameInput: '', ifClickGroup: 0 });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showForm(e) {
    const { name } = e.target;
    const { ifClickEvent, ifClickGroup } = this.state;
    let val;
    if (name === 'ifClickEvent') {
      console.log('value ifClickE');
      val = ifClickEvent;
    } else if (name === 'ifClickGroup') {
      console.log('else if');
      val = ifClickGroup;
    }
    this.setState({ [name]: !val });
  }

  render() {
    const {
      groups,
      ifClickEvent,
      eventContent,
      eventDate,
      eventHeader,
      eventTags,
      ifClickGroup,
      groupNameInput,
    } = this.state;
    return (
      <div className="App">
        <Navbar showForm={this.showForm} />
        <Main
          groupNameInput={groupNameInput}
          ifClickEvent={ifClickEvent}
          ifClickGroup={ifClickGroup}
          groups={groups}
          eventContent={eventContent}
          eventDate={eventDate}
          eventHeader={eventHeader}
          eventTags={eventTags}
          addGroup={this.addGroup}
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

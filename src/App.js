import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
      ],
    };
  }

  render() {
    const { groups } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Main groups={groups} />
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

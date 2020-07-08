import React, { PureComponent } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
// import I from 'immutable';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;

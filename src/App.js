import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Group from './components/Group';
import './App.css';
// import I from 'immutable';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route path="/Groups/:groupName" component={Group} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, {Component} from 'react';
import logo from './assets/header.png';
import footer from './assets/list.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo}/>
        <img src={footer}/>
      </div>
    );
  }
}

export default App;

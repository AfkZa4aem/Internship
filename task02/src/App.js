import React, { Component } from 'react';
import Header from './Header/Header';
import Note from './Note/Note';
import Search from './Search/Search';
import Designers from './Designers/Designers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Note />
        <Search />
        <Designers />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header/Header';
import Note from './components/Note/Note';
import Search from './components/Search/Search';
import DesignerList from './containers/DesignerList/DesignerList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Note />
        <Search />
        <DesignerList />
      </div>
    );
  }
}

export default App;

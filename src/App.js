import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './movies/movies-list';

class App extends Component {
  title = 'Movie Tinder';

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.title}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <MoviesList></MoviesList>
      </div>
    );
  }
}

export default App;

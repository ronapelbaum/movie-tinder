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
          <h2>{this.title}</h2>
        </div>
          <MoviesList></MoviesList>
      </div>
    );
  }
}

export default App;

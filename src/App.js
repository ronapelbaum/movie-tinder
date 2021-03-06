import React, { Component } from 'react';
import MoviesList from './movies/movies-list';
import {Navbar} from './utils/ui';
class App extends Component {
  title = 'Movie Tinder';

  render() {
    return (
      <div className="text-center">
          <Navbar title={this.title}/>
          <div className="container">
              <MoviesList/>
          </div>
      </div>
    );
  }
}

export default App;

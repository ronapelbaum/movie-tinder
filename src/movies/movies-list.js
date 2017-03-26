import React, {Component} from 'react';
import MovieItem from './movie-item';
import MoviesData from './movies-data';
import {MySlider} from '../utils/ui';

class MoviesList extends Component {
    constructor() {
        super();
        this.md = new MoviesData();
        this.list = this.md.getMoreMovies();
    }

    render() {
        const vote = this.md.vote.bind(this.md);
        const movies = this.list.map((movie, index) => <MovieItem movie={movie} vote={vote} key={index}></MovieItem>);
        return (
            <div>{movies}</div>
        );
    }
}
export default MoviesList;

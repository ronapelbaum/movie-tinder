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
        const movies = this.list.map((movie, index) => <div key={index} className="text-center"><MovieItem movie={movie} vote={vote} ></MovieItem></div>);
        return (
            <MySlider>{movies}</MySlider>
        );
    }
}
export default MoviesList;

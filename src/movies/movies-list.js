import React, {Component} from 'react';
import MovieItem from './movie-item';
import MoviesData from './movies-data';


class MoviesList extends Component {
    constructor() {
        super();
        this.md = new MoviesData();
        this.list = this.md.getMoreMovies();
    }

    render() {
        const vote = this.md.vote.bind(this.md);
        const movies = this.list.map((movie) => <MovieItem movie={movie} vote={vote} key={movie.id}></MovieItem>);
        return (
            <div>{movies}</div>
        );
    }
}
export default MoviesList;

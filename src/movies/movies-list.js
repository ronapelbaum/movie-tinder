import React, {Component} from 'react';
import MovieItem from './movie-item';

const topMovies = [
    {title: 'Ironman', year: 2008, genre: ['action', 'sci-fi']},
    {title: 'Titanic', year: 1997, genre: ['drama']}
];

class MoviesList extends Component {
    constructor() {
        super();
        this.list = topMovies;
    }

    render() {
        const movies = this.list.map((movie) => <MovieItem movie={movie}></MovieItem>);
        return (
            <div>{movies}</div>
        );
    }
}
export default MoviesList;

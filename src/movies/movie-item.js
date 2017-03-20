import React, {Component} from 'react';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.movie = props.movie;
        console.log('ron movie-item.constructor()', this.movie);//TODO remove this
    }

    render() {
        return (
            <div>
                <h3>{this.movie.title} ({this.movie.year})</h3>
                <span>{this.movie.genre}</span>
            </div>
        );
    }
}

export default MovieItem;

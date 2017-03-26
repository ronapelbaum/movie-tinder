import React, {Component} from 'react';
import {ButtonGroup} from '../utils/ui';
import './movie-item.css';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.movie = props.movie;

        console.log('ron movie-item.constructor()', this.movie);//TODO remove this

        this.buttons = [
            {onClick: props.vote.bind(this, this.movie, 'dislike'), icon: 'thumbs-o-down'},
            {onClick: props.vote.bind(this, this.movie, 'saveForLater'), icon: 'thumb-tack'},
            {onClick: props.vote.bind(this, this.movie, 'like'), icon: 'thumbs-o-up'}
        ];
    }

    render() {
        return (
            <div>
                <h3>{this.movie.title} ({this.movie.year})</h3>
                <img className="movie-item-image" src={this.movie.poster} alt={this.movie.title}/>
                <div>{this.movie.genres}</div>
                <ButtonGroup buttons={this.buttons}/>
            </div>
        );
    }
}

export default MovieItem;

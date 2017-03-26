import React, {Component} from 'react';
import {FaIcon} from '../utils/ui';
import './movie-item.css';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.movie = props.movie;

        console.log('ron movie-item.constructor()', this.movie);//TODO remove this

        this.like = props.vote.bind(this, this.movie, 'like');
        this.dislike = props.vote.bind(this, this.movie, 'dislike');
        this.saveForLater = props.vote.bind(this, this.movie, 'saveForLater');
    }

    render() {
        return (
            <div>
                <h3>{this.movie.title} ({this.movie.year})</h3>
                <img className="movie-item-image" src={this.movie.poster} alt={this.movie.title}/>
                <div>{this.movie.genre.join(',')}</div>
                <div>
                    <button onClick={this.dislike}><FaIcon icon="thumbs-o-down"/></button>
                    <button onClick={this.saveForLater}><FaIcon icon="thumb-tack"/></button>
                    <button onClick={this.like}><FaIcon icon="thumbs-o-up"/></button>
                </div>
            </div>
        );
    }
}

export default MovieItem;

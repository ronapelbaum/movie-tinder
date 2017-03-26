import React, {Component} from 'react';
import {FaIcon} from '../utils/ui';

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
                <span>{this.movie.genre.join(',')}</span>
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

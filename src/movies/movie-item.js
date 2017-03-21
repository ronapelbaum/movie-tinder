import React, {Component} from 'react';

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
                    <button onClick={this.dislike}>Dislike</button>
                    <button onClick={this.saveForLater}>Save For Later</button>
                    <button onClick={this.like}>Like</button>
                </div>
            </div>
        );
    }
}

export default MovieItem;

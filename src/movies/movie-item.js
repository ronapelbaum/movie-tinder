import React, {Component} from 'react';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.movie = props.movie;
        this.vote = props.vote;

        console.log('ron movie-item.constructor()', this.movie);//TODO remove this

        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
        this.saveForLater = this.saveForLater.bind(this);
    }

    like() {
        console.log('ron movie-item.like()', this.movie.title);//TODO remove this
        this.vote(this.movie, 'like');
    }

    dislike() {
        console.log('ron movie-item.dislike()', this.movie.title);//TODO remove this
        this.vote(this.movie, 'dislike');
    }

    saveForLater() {
        console.log('ron movie-item.saveForLater()', this.movie.title);//TODO remove this
        this.vote(this.movie, 'saveForLater');
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

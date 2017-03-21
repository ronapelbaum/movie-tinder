import UserData from '../user/user-data';
import DataService from '../data/data-service';

const topMovies = [
    {id: 0, title: 'Ironman', year: 2008, genre: ['action', 'sci-fi']},
    {id: 1, title: 'Titanic', year: 1997, genre: ['drama']}
];

class MoviesData {
    constructor() {
        this.ud = new UserData();
        this.ds = new DataService();
    }

    getMoreMovies() {
        return topMovies;
    }

    vote(movie, vote) {
        console.log('ron movies-data.vote()', this.ud.getUserId(), movie.title, vote);//TODO remove this
        this.ds.add({
            userId: this.ud.getUserId(),
            movie: movie,
            vote: vote
        })
    }
}
export default MoviesData;

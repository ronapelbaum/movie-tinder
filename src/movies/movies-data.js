import UserData from '../user/user-data';
import DataService from '../data/data-service';

const topMovies = [
    {
        id: 0,
        title: 'Ironman',
        year: 2008,
        genre: ['action', 'sci-fi'],
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    },
    {
        id: 1,
        title: 'Titanic',
        year: 1997,
        genre: ['drama'],
        poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg'
    }
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



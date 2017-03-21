import UserData from '../user/user-data';
const topMovies = [
    {title: 'Ironman', year: 2008, genre: ['action', 'sci-fi']},
    {title: 'Titanic', year: 1997, genre: ['drama']}
];

class MoviesData{
    constructor(){
        this.ud = new UserData();
    }
    getMoreMovies(){
        return topMovies;
    }

    vote(movie, vote){
        console.log('ron movies-data.vote()', this.ud.getUserId(), movie.title, vote);//TODO remove this
    }
}
export default MoviesData;

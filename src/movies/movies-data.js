const topMovies = [
    {title: 'Ironman', year: 2008, genre: ['action', 'sci-fi']},
    {title: 'Titanic', year: 1997, genre: ['drama']}
];

class MoviesData{
    getMoreMovies(){
        return topMovies;
    }

    vote(movie, vote){
        console.log('ron movies-data.vote()', movie.title, vote);//TODO remove this
    }
}
export default MoviesData;

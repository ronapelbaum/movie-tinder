import UserData from '../user/user-data';
import DataService from '../data/data-service';

const topMovies = [
    {
        "title": "Pulp Fiction",
        "_year_data": "1994",
        "year": "1994",
        "rated": "R",
        "released": "1994-10-13T22:00:00.000Z",
        "runtime": "154 min",
        "genres": "Crime, Drama",
        "director": "Quentin Tarantino",
        "writer": "Quentin Tarantino (story), Roger Avary (story), Quentin Tarantino",
        "actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
        "plot": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
        "languages": "English, Spanish, French",
        "country": "USA",
        "awards": "Won 1 Oscar. Another 60 wins & 68 nominations.",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
        "metascore": "94",
        "rating": "8.9",
        "votes": "1,399,893",
        "imdbid": "tt0110912",
        "type": "movie",
        "response": "True",
        "series": "false",
        "imdburl": "https://www.imdb.com/title/tt0110912"
    },
    {
        "title": "The Shawshank Redemption",
        "_year_data": "1994",
        "year": "1994",
        "rated": "R",
        "released": "1994-10-13T22:00:00.000Z",
        "runtime": "142 min",
        "genres": "Crime, Drama",
        "director": "Frank Darabont",
        "writer": "Stephen King (short story Rita Hayworth and Shawshank Redemption), Frank Darabont (screenplay)",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        "plot": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
        "languages": "English",
        "country": "USA",
        "awards": "Nominated for 7 Oscars. Another 19 wins & 30 nominations.",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
        "metascore": "80",
        "rating": "9.3",
        "votes": "1,786,262",
        "imdbid": "tt0111161",
        "type": "movie",
        "response": "True",
        "series": "false",
        "imdburl": "https://www.imdb.com/title/tt0111161"
    },
    {
        "title": "The Dark Knight",
        "_year_data": "2008",
        "year": "2008",
        "rated": "PG-13",
        "released": "2008-07-17T21:00:00.000Z",
        "runtime": "152 min",
        "genres": "Action, Crime, Drama",
        "director": "Christopher Nolan",
        "writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "plot": "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batmans struggle against the Joker becomes deeply personal, forcing him to confront everything he believes and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
        "languages": "English, Mandarin",
        "country": "USA, UK",
        "awards": "Won 2 Oscars. Another 147 wins & 144 nominations.",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "metascore": "82",
        "rating": "9.0",
        "votes": "1,768,567",
        "imdbid": "tt0468569",
        "type": "movie",
        "response": "True",
        "series": "false",
        "imdburl": "https://www.imdb.com/title/tt0468569"
    },
    {
        "title": "Titanic",
        "_year_data": "1997",
        "year": "1997",
        "rated": "PG-13",
        "released": "1997-12-18T22:00:00.000Z",
        "runtime": "194 min",
        "genres": "Drama, Romance",
        "director": "James Cameron",
        "writer": "James Cameron",
        "actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
        "plot": "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
        "languages": "English, Swedish",
        "country": "USA",
        "awards": "Won 11 Oscars. Another 110 wins & 74 nominations.",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "metascore": "74",
        "rating": "7.7",
        "votes": "833,953",
        "imdbid": "tt0120338",
        "type": "movie",
        "response": "True",
        "series": "false",
        "imdburl": "https://www.imdb.com/title/tt0120338"
    },
    {
        "title": "Iron Man",
        "_year_data": "2008",
        "year": "2008",
        "rated": "PG-13",
        "released": "2008-05-01T21:00:00.000Z",
        "runtime": "126 min",
        "genres": "Action, Adventure, Sci-Fi",
        "director": "Jon Favreau",
        "writer": "Mark Fergus (screenplay), Hawk Ostby (screenplay), Art Marcum (screenplay), Matt Holloway (screenplay), Stan Lee (characters), Don Heck (characters), Larry Lieber (characters), Jack Kirby (characters)",
        "actors": "Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow",
        "plot": "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, hes given a ride on enemy lines. That ride ends badly when Starks Humvee that hes riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tonys technology for other matters.",
        "languages": "English, Persian, Urdu, Arabic, Hungarian",
        "country": "USA",
        "awards": "Nominated for 2 Oscars. Another 19 wins & 61 nominations.",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
        "metascore": "79",
        "rating": "7.9",
        "votes": "729,172",
        "imdbid": "tt0371746",
        "type": "movie",
        "response": "True",
        "series": "false",
        "imdburl": "https://www.imdb.com/title/tt0371746"
    },
    {
        "title": "The Godfather",
        "_year_data": "1972",
        "year": "1972",
        "rated": "R",
        "released": "1972-03-23T22:00:00.000Z",
        "runtime": "175 min",
        "genres": "Crime, Drama",
        "director": "Francis Ford Coppola",
        "writer": "Mario Puzo (screenplay), Francis Ford Coppola (screenplay), Mario Puzo (novel)",
        "actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
        "plot": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.",
        "languages": "English, Italian, Latin",
        "country": "USA",
        "awards": "Won 3 Oscars. Another 23 wins & 27 nominations.",
        "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "metascore": "100",
        "rating": "9.2",
        "votes": "1,219,320",
        "imdbid": "tt0068646",
        "type": "movie",
        "response": "True",
        "series": "false",
        "imdburl": "https://www.imdb.com/title/tt0068646"
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



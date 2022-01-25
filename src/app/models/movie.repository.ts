import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];

    constructor() {
        this.movies = [
            { id: 1, title: "Film 1", description: "Film 1 açıklama", imageurl: "1.jpeg", isPopuler: false },
            { id: 2, title: "Film 2", description: "Film 2 açıklama", imageurl: "2.jpeg", isPopuler: true },
            { id: 3, title: "Film 3", description: "Film 3 açıklama", imageurl: "3.jpeg", isPopuler: false },
            { id: 4, title: "Film 4", description: "Film 4 açıklama", imageurl: "4.jpeg", isPopuler: true },
            { id: 5, title: "Film 5", description: "Film 5 açıklama", imageurl: "5.jpeg", isPopuler: true },
        ];
    }


    getMovies(): Movie[] {
        return this.movies;
    }

    getPopulerMovies(): Movie[] {
        return this.movies.filter(i => i.isPopuler);
    }
    
    getMovieGetById(id: number): Movie {
        return this.movies.find(i => i.id == id);
    }
}
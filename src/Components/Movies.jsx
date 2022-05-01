import { Movie } from "./Movie"

export function Movies(props) {
    const {movies = []} = props;
    return (
        <div className="cards">
            {movies.length ? movies.map(movie => <Movie key={movie.imdbID} {...movie}/>) : <h4>Nothing find</h4>}
        </div>
    )
}
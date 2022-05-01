export function Movie(movie) {
    return (
        <div className="card">
            <div className="card__title">
            {movie.Title}
            </div>
            <div className="card__poster">
                <img className="card-poster__image" src={movie.Poster} alt="" />
            </div>
            <div className="card__information">
                <div className="card-information__year">
                    {movie.Year}
                </div>
                <div className="card-information__type">{movie.Type}</div>
            </div>
        </div>
    )
}
import { useContext } from 'react';
import { Clock, Star } from 'react-feather';
import '../styles/movie-description.scss';
import { MovieContext } from '../utils/MovieContext';

export function MovieDescription() {
  const { movie, handleCloseMovieDetails } = useContext(MovieContext);

  return (
    <div className="container movie-description">
      <header>
        <div className="movie-header">
          <p>{movie.Title}</p>
          <div className="meta">
            <div> <Star /> {movie.Ratings[0].Value} </div>
            <div> <Clock /> {movie.Runtime} </div>
          </div>
        </div>
        <div>
          <button onClick={() => handleCloseMovieDetails()}>Voltar</button>
        </div>
      </header>
      <main>
        <div className="movie-thumb">
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
        <div className="movie-info">
          <p className="movie-plot">{movie.Plot}</p>
          <p><span>Diretor: </span>{movie.Director}</p>
          <p><span>Escritores: </span>{movie.Writer}</p>
          <p><span>Prêmios: </span>{movie.Awards}</p>
          <p><span>Categorias: </span>{movie.Genre}</p>
          <p><span>Idioma: </span>{movie.Language}</p>
          <p><span>Tempo Filme: </span>{movie.Runtime}</p>
          <p><span>Lançamento: </span>{movie.Released}</p>
          <p><span>Bilheteria: </span>{movie.BoxOffice}</p>
        </div>
      </main>
    </div>
  );
}
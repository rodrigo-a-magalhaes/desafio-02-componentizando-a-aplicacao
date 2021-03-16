import { useContext } from 'react';
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';
import { MovieContext } from '../utils/MovieContext';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(props: MovieCardProps) {

  const {handleOpenMovieDetails} = useContext(MovieContext);

  return (
    <div className="movie-card" onClick={() => handleOpenMovieDetails(props.title)}>
      <div className="movie-card-effect">
        <img
          src={props.poster}
          alt={props.title}
        />

        <div>
          <div className="movie-info">
            <span>{props.title}</span>
            <div className="meta">
              <div>
                <Star /> {props.rating}
              </div>

              <div>
                <Clock /> {props.runtime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
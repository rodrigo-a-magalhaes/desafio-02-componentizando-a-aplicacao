import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { GenreResponseProps, MovieProps } from './Movie.interface';

interface MovieContextData {
  movies: MovieProps[];
  movie: MovieProps;
  genres: GenreResponseProps[];
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
  isDetails: boolean;
  handleClickButton: (id: number) => void;
  handleOpenMovieDetails: (title: string) => void;
  handleCloseMovieDetails: () => void;
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext<MovieContextData>({} as MovieContextData);
export function MovieProvider({ children }: MovieProviderProps) {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [isDetails, setIsDetails] = useState(false);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
      setIsDetails(false);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  function handleOpenMovieDetails(title: string) {
    api.get<MovieProps[]>(`movies/?Title=${title}`)
      .then(Response => {
        setMovie(Response.data[0]);
        setIsDetails(true);
      });
  }

  function handleCloseMovieDetails() {
    setIsDetails(false);
  }

  return (
    <MovieContext.Provider value={{
      movies,
      movie,
      genres,
      selectedGenreId,
      selectedGenre,
      isDetails,
      handleClickButton,
      handleOpenMovieDetails,
      handleCloseMovieDetails
    }}>
      {children}
    </MovieContext.Provider>
  )
}
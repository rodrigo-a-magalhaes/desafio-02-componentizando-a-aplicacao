import React, { useContext } from "react";
import { MovieContext } from "../utils/MovieContext";
import { MovieCard } from "./MovieCard";

export function MovieList() {
  const { movies, selectedGenre } = useContext(MovieContext);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria: <span> {selectedGenre.title}</span>
        </span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
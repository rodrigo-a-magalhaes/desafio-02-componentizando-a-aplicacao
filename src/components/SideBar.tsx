import { useContext } from 'react';
import '../styles/sidebar.scss';
import { MovieContext } from '../utils/MovieContext';
import { Button } from "./Button";

export function SideBar() {
  const { genres, selectedGenreId, handleClickButton } = useContext(MovieContext);

  // Complete aqui
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}
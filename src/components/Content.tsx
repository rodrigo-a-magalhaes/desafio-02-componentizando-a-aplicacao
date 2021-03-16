import React, { useContext } from 'react';
import '../styles/content.scss';
import { MovieContext } from '../utils/MovieContext';
import { MovieDescription } from './MovieDescription';
import { MovieList } from './MovieList';

export function Content() {
  // Complete aqui
  const { isDetails } = useContext(MovieContext);

  return (
    <>
      {!isDetails ?
        (<MovieList />) :
        (<MovieDescription />)
      }
    </>
  );

}
import React from 'react'
import { GenreResponseProps, MovieProps } from '../App'
import { MovieCard } from './MovieCard'

interface TContentProps {
  movies: MovieProps[],
  selectedGenre: GenreResponseProps
}

export function Content({ movies, selectedGenre }: TContentProps) {
  // Complete aqui
  return(
    <>
      <div className="container">
          <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
          </header>
          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
      </div>
    </>
  )
}
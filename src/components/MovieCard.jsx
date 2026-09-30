import React from 'react'

const MovieCard = ({movie}) => {

  const onFavoriteClick = () =>{
    alert('clicked')
  }
  return (
    <div className='movie__card'>
      <div className='movie__poster'>
        <img src={movie.url} alt={movie.title} />
        <div className="movie__overlay">
          <button className='favorite-btn' onClick={onFavoriteClick}>
            ❤︎
          </button>
        </div>
      </div>
      <div className="movie__info">
        <h3>{movie.title}</h3>
        <p>{movie.date}</p>
      </div>
    </div>
  )
}

export default MovieCard
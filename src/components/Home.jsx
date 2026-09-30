import React, { useState } from 'react'
import MovieCard from './MovieCard';

const Home = () => {

  const [search, setSearch] = useState('');

  const movies = [
    {id:'1', title:'Elemental', date:'2024'},
    {id:'2', title:'John Wick', date:'2018'},
    {id:'3', title:'Terminator', date:'1999'},
    {id:'4', title:'Home Alone', date:'1995'},
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    alert(search)
    setSearch('')
  }

  return (
    <div className='home'>
      <div className="form-class">
        <form onSubmit={handleSearch} className='search-form'>
          <input 
            type='text'
            placeholder='Search for movies...'
            className='search-input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' className='serch-btn'>Search</button>
        </form>
      </div>
      <div className="movie-grid">
        {
          movies.map((movie)=>
            movie.title.toLowerCase().startsWith(search) && (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default Home
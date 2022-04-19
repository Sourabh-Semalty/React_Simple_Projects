import React,{useEffect,useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMovies = async () => {
    setIsLoading(true);
    const res = await fetch('https://swapi.dev/api/films')
    const data = await res.json();
    const transformed = data.results.map(moviesData => {
      return {
        id: moviesData.episode_id,
        title: moviesData.title,
        openingText: moviesData.opening_crawl,
        releaseData:moviesData.release_date
      }
    })
    setMovies(transformed)
    setIsLoading(false);
 }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0   && <MoviesList movies={movies}/>}
        {!isLoading && movies.length === 0 && <p>Found No Movies</p>}
        {isLoading && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

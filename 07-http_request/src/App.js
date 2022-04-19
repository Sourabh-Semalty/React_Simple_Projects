import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const res = await fetch(
        "https://react-http-76b78-default-rtdb.firebaseio.com/movies.json"
      );
      if (!res.ok) throw new Error("Http status : " + res.status);
      const data = await res.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseData: data[key].releaseData,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  let content = <p>Found No movies</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (isError) content = <p>{isError}</p>;
  if (isLoading) content = <p>Loading...</p>;

  const addMovieHandler = async (movie) => {
    try {
      const resp = await fetch(
        "https://react-http-76b78-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!resp.ok) throw new Error("Http status : " + resp.status);
    } catch (error) {
      setIsError(error.message);
    }
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

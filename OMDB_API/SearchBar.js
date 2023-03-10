import React, { useState } from "react";
import axios from "axios";
import '../App.css'

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovies = async (e) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=99eb9fd1`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError(null);
      } else {
        setError("Invalid movie name. Please try again.");
        setMovies([]);
      }
    } catch (error) {
      setError("Failed to fetch movies. Please try again later.");
      setMovies([]);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(query);
  };

  return (
    <div>
      Search Movie
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {!error && movies && movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <h2>
                {movie.Title} ({movie.Year})
              </h2>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default SearchBar;

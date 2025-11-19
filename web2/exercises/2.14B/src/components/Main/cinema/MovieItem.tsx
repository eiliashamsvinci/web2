import { useState } from "react";
import type { Film } from "../../../types";
import "./cinema.css";

const filmData: Film[] = [
  { id: 1, title: "A Separation", director: "Asghar Farhadi", duration: 123, description: "The story of a separation and family struggles in Iran.", budget: 2000000 },
  { id: 2, title: "The Salesman", director: "Asghar Farhadi", duration: 125, description: "A couple faces moral and social challenges.", budget: 1800000 },
  { id: 3, title: "About Elly", director: "Asghar Farhadi", duration: 119, description: "A group of friends goes on a trip and secrets are revealed.", budget: 1500000 },
  { id: 4, title: "Children of Heaven", director: "Majid Majidi", duration: 89, description: "A touching story of two siblings and a lost pair of shoes.", budget: 1200000 },
  { id: 5, title: "The Color of Paradise", director: "Majid Majidi", duration: 100, description: "A blind boy experiences life, love, and challenges in rural Iran.", budget: 1300000 },
];

const MovieItem = () => {
  const [expandedFilmId, setExpandedFilmId] = useState<number | null>(null);
  const toggleFilm = (id: number) => {
    setExpandedFilmId(expandedFilmId === id ? null : id);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      {filmData.map(film => (
        <div key={film.id} className="movie-item" onClick={() => toggleFilm(film.id)}>
          <h2 className="movie-title">{film.title}</h2>
          {expandedFilmId === film.id && (
            <div className="movie-details">
              <p>Director: {film.director}</p>
              <p>Duration: {film.duration} min</p>
              <p>Description: {film.description}</p>
              <p>Budget: ${film.budget?.toLocaleString()}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieItem;

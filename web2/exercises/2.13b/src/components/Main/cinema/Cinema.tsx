import Footer from "../../Footer";
import Header from "../../Header";
import Movie from "./MovieItem";
import type { Film } from "../../../types";

type CinemaType = {
  name: string;
  movies: Film[];
};

const cinemaData1: CinemaType = {
  name: "My Cinema",
  movies: [
    {
      id: 1,
      title: "A Separation",
      director: "Asghar Farhadi",
      duration: 123,
      description: "The story of a separation and family struggles in Iran.",
      budget: 2000000,
    },
    {
      id: 2,
      title: "The Salesman",
      director: "Asghar Farhadi",
      duration: 125,
      description: "A couple faces moral and social challenges.",
      budget: 1800000,
    },
    {
      id: 3,
      title: "About Elly",
      director: "Asghar Farhadi",
      duration: 119,
      description:
        "A group of friends goes on a trip and secrets are revealed.",
      budget: 1500000,
    },
  ],
};

const cinemaData2: CinemaType = {
  name: "Another Cinema",
  movies: [
    {
      id: 4,
      title: "Children of Heaven",
      director: "Majid Majidi",
      duration: 89,
      description: "A touching story of two siblings and a lost pair of shoes.",
      budget: 1200000,
    },
    {
      id: 5,
      title: "The Color of Paradise",
      director: "Majid Majidi",
      duration: 100,
      description: "A blind boy experiences life and love.",
    },
  ],
};

const Cinema = () => {
  return (
    <div>
      <div>
        <h1>Welcome to the Cinema Page</h1>
        <h2>{cinemaData1.name}</h2>
        <div>
          {cinemaData1.movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Duration: {movie.duration} minutes</p>
              <p>Description: {movie.description}</p>
              {movie.budget && <p>Budget: ${movie.budget}</p>}
            </div>
          ))}
        </div>

        <h2>{cinemaData2.name}</h2>
       {cinemaData2.movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Duration: {movie.duration} minutes</p>
              <p>Description: {movie.description}</p>
              {movie.budget && <p>Budget: ${movie.budget}</p>}
            </div>
             ))}
             </div>
    </div>
  );
};

export default Cinema;

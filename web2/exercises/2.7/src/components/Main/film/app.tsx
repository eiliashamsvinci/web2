import type { Film } from "../../../types";
import { useState } from "react";
import AddFilmsForm from "./addFilm";

const App = () => {
  const defaultFilms: Film[] = [
    {
      title: "A Separation",
      director: "Asghar Farhadi",
      duration: 123,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDM0ZWRmMzctM2M5ZS00ZjU0LWIxN2MtNWNlNGY1ZDhjMDVhXkEyXkFqcGc@._V1_.jpg",
      description: "The story of a couple going through a separation and its impact on their family.",
    },
    {
      title: "Where is the Friend's Home?",
      director: "Abbas Kiarostami",
      duration: 89,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6ZTF6jO4P7vP7BDbXGbIGRu_32h5fhzM-Q&s",
      description: "A simple story about friendship and responsibility in an Iranian village.",
      budget: 500000,
    },
    {
      title: "The White Balloon",
      director: "Jafar Panahi",
      duration: 85,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/BadeKonakSefid.jpg",
      description: "A story about a girl trying to buy a goldfish and the challenges she faces.",
      budget: 400000,
    },
    {
      title: "Taste of Cherry",
      director: "Abbas Kiarostami",
      duration: 95,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Taste_of_Cherry.jpg",
      description: "A man searches for someone to help him with a life-altering decision.",
      budget: 600000,
    },
    {
      title: "Fireworks Wednesday",
      director: "Asghar Farhadi",
      duration: 105,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1f/Fireworks_2011_film_poster.jpg",
      description: "A complex story about family relationships and hidden secrets in everyday life.",
      budget: 1000000,
    },
  ];

  const [films, setFilms] = useState<Film[]>(defaultFilms); 

  const onMovieAdded = (newFilm: Film) => {
    setFilms((prev) => [...prev, newFilm]); 
  };

  return (
    <main>
      <AddFilmsForm onMovieAdded={onMovieAdded} />
      <h2>Liste des films :</h2>
      <ul>
        {films.map((f, index) => (
          <li key={index}>
            <h3>{f.title}</h3>
            <p>Réalisateur : {f.director}</p>
            <p>Durée : {f.duration} min</p>
            {f.imageUrl && <img src={f.imageUrl} alt={f.title} width="100" />}
            <p>{f.description}</p>
            {f.budget && <p>Budget : {f.budget.toLocaleString()} $</p>}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;

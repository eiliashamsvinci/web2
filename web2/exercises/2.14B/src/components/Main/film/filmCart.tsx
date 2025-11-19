import type { Film } from "../../../types";
import { useState } from "react";
import { Link } from "react-router-dom";


interface FilmCartProps {
  film: Film;
  onLike?: (film: Film) => void;
}

const FilmCart = ({ film, onLike }: FilmCartProps) => {

  return (
    <div className="film-cart">
    <h3>
        <Link to={`/movie/${film.id}`}>{film.title}</Link>
      </h3>      <p>Réalisateur: {film.director}</p>
      <p>Durée: {film.duration} minutes</p>
      {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
      <p>{film.description}</p>
      <p>Budget: ${film.budget?.toLocaleString() ?? "NON"}</p>
      {onLike && <button onClick={() => onLike(film)}>Like</button>}
    </div>
  );
};
export default FilmCart;

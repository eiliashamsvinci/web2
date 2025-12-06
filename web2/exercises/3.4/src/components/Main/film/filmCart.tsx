import type { Film } from "../../../types";
import { Link } from "react-router-dom";
import type { AuthenticatedUser } from "../../../types";

interface FilmCartProps {
  film: Film;
  onLike?: (film: Film) => void;
  onDelete?: (film: Film) => void;
  authenticatedUser?: AuthenticatedUser;
}

const FilmCart = ({ film, onLike, onDelete, authenticatedUser }: FilmCartProps) => {

  if (!film) return <div>Loading...</div>;

  if (authenticatedUser && authenticatedUser.username === "admin") {
    return (
      <div className="film-cart">
        <h3>
          <Link to={`/movie/${film.id}`}>{film.title}</Link>
        </h3>
        <p>Réalisateur: {film.director}</p>
        <p>Durée: {film.duration} minutes</p>
        {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
        <p>{film.description}</p>
        <p>Budget: ${film.budget?.toLocaleString() ?? "NON"}</p>

        {onLike && <button onClick={() => onLike(film)}>Like</button>}

        {onDelete && <button onClick={() => onDelete(film)}>Delete Movie</button>}
      </div>
    );
  }

  return (
    <div className="film-cart">
      <h3>
        <Link to={`/movie/${film.id}`}>{film.title}</Link>
      </h3>
      <p>Réalisateur: {film.director}</p>
      <p>Durée: {film.duration} minutes</p>
      {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
      <p>{film.description}</p>
      <p>Budget: ${film.budget?.toLocaleString() ?? "NON"}</p>

      {onLike && <button onClick={() => onLike(film)}>Like</button>}
    </div>
  );
};

export default FilmCart;

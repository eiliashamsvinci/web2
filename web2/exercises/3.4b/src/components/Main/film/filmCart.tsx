import type { Film, AuthenticatedUser } from "../../../types";
import { useNavigate, Link } from "react-router-dom";

interface FilmCartProps {
  film: Film;
  onLike?: (film: Film) => void;
  onDelete?: (film: Film) => void;
  onEdit?: (film: Film) => void;
  authenticatedUser?: AuthenticatedUser;
}

const FilmCart = ({ film, onLike, onDelete, onEdit, authenticatedUser }: FilmCartProps) => {
  const navigate = useNavigate();

  if (!film) return <div>Loading...</div>;

  const handleEdit = () => {
    if (onEdit) onEdit(film);
    navigate(`/update-film/${film.id}`);
  };

  return (
    <div className="film-cart">
      <h3><Link to={`/movie/${film.id}`}>{film.title}</Link></h3>
      <p>Réalisateur: {film.director}</p>
      <p>Durée: {film.duration} minutes</p>
      {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
      <p>{film.description}</p>
      <p>Budget: ${film.budget?.toLocaleString() ?? "NON"}</p>

      {authenticatedUser && (
        <>
          {onLike && <button onClick={() => onLike(film)}>Like</button>}
          {authenticatedUser.username && <button onClick={handleEdit}>Edit</button>}
          {authenticatedUser.username === "admin" && onDelete && (
            <button onClick={() => onDelete(film)}>Delete</button>
          )}
        </>
      )}
    </div>
  );
};

export default FilmCart;

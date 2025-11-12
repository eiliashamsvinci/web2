
import type { Film } from "../../../types";


interface FilmCartProps {
  film: Film;
}

 


const FilmCart = ({ film }: FilmCartProps) => { 

    return (
        <div className="film-cart">
            <h3>{film.title}</h3>
            <p>Réalisateur: {film.director}</p>
            <p>Durée: {film.duration} minutes</p>
            {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
            <p>{film.description}</p>
            <p>Budget: ${film.budget?.toLocaleString() ?? "NON"}</p>
        </div>
    );
 }
export default FilmCart;
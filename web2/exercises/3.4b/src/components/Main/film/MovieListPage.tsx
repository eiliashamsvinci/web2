import type { Film } from "../../../types";
import FilmCart from "./filmCart";
import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../../types";

const MovieListPage = () => { 
  const { movies, onMovieLiked, onMovieDeleted, authenticatedUser , onMovieUpdated  } = useOutletContext<MovieContext>();

  return ( 
    <div>
      <ul>
        {movies.map((film) => (
          <li key={film.id}>
            <FilmCart 
              film={film} 
              onLike={onMovieLiked} 
              onDelete={onMovieDeleted} 
              onEdit={onMovieUpdated}
              authenticatedUser={authenticatedUser}   
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieListPage;

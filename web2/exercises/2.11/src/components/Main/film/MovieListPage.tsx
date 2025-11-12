
import type { Film } from "../../../types";
import FilmCart from "./filmCart";
import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../../types";



interface movieListPageProps {
  films: Film[];
}


const MovieListPage = () => { 
      const { movies } = useOutletContext<MovieContext>();

    return ( 
        <div>
            <ul >
                {movies.map((film, index) => (
                    <li key={index}>
                        <FilmCart key={index} film={film} />
                    </li>
                ))}
            </ul>
        </div>
    ) 
}
export default MovieListPage;
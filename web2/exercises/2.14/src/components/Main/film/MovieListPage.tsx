
import type { Film } from "../../../types";
import FilmCart from "./filmCart";
import { useOutletContext , useParams } from "react-router-dom";
import type { MovieContext } from "../../../types";



interface movieListPageProps {
  films: Film[];
}


const MovieListPage = () => { 
  const { movies, onMovieLiked } = useOutletContext<
  MovieContext & { onMovieLiked: (f: any) => void }>();
        const { id } = useParams<{ id: string }>();

          const film = movies.find(f => f.id === Number(id));

     



    return ( 
        <div>
            <ul >
                {movies.map((film, index) => (
                    <li key={index}>
                        <FilmCart key={index} film={film} onLike={onMovieLiked} />
                    </li>
                ))}
            </ul>
        </div>
    ) 
}
export default MovieListPage;
import { Outlet, useNavigate } from "react-router-dom";
import Headers from "../../Header";
import { useState , useEffect } from "react";
import type { Film  , MovieContext , NewFilm } from "../../../types";
import { fetchFilms, addFilm, likeFilm, DeleteLikeFilm } from "../utile/film.service"; 

 



const defultFilms : Film[] = [
    {
      id : 1 ,
        title : "Inception" , 
        director : "Christopher Nolan" , 
        duration : 148 , 
        imageUrl : "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY445_.jpg" , 
        description : "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." , 
        budget : 160000000
    } ,
    {
      id : 2 ,
        title : "The Matrix" , 
        director : "The Wachowskis" , 
        duration : 136 , 
        imageUrl : "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY445_.jpg" , 
        description : "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers." , 
        budget : 63000000
    }
];
const App = () => {
    const [films , setFilms] = useState(defultFilms) ;
    const [likedMovies, setLikedMovies] = useState<Film[]>([]);

    const navigate = useNavigate() ;


  const initMovies = async () => {
    try {
      const movies = await fetchFilms();
      setFilms(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initMovies();
  }, []);

const onMovieAdded = async (newMovie: NewFilm) => {
  try {
    const created = await addFilm(newMovie); 
    const allFilms = await fetchFilms();    
    setFilms(allFilms);
  } catch (err) {
    console.error(err);
  }
};

    const onMovieLiked = async (movie: Film) => {
      try{
        const liked = await likeFilm(movie) ; 
        setLikedMovies( prevLikedMovies => [ ...prevLikedMovies , liked ] ) ;
      }catch(err){
         console.error(err) ; 
      }
    }

const removeLikedMovie = async (movieId: number) => {
  try {
    await DeleteLikeFilm(likedMovies.find(m => m.id === movieId)!); 
    setLikedMovies(prevLikedMovies =>
      prevLikedMovies.filter(movie => movie.id !== movieId)
    );
  } catch (error) {
    console.error(error);
  }
};
      const movieContext: MovieContext = {
        movies: films,
         onMovieAdded,
         onMovieLiked , 
       onMovieRemoved: removeLikedMovie,

  };

  return (
    <div className="App">
      <Headers />
      <h1>welcome to film list</h1>
      <main>
      <Outlet context={movieContext} />
      </main>
      <p>list liked movies </p>
       <ul>
        {likedMovies.map(f => <li key={f.id}>{f.title}
       <button onClick={() => movieContext.onMovieRemoved?.(f.id)}>Remove</button>
        </li>)}
  

      </ul>
    </div>
  );
}

export default App;
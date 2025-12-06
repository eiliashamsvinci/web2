import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../Header";
import { useState, useEffect } from "react";
import type { Film, MaybeAuthenticatedUser, MovieContext, NewFilm } from "../../../types";
import { fetchFilms, addFilm, likeFilm, unlikeFilm, deleteMovie, updateFilm } from "../utile/film.service";
import { clearAuthenticatedUser, storeAuthenticatedUser } from "../utile/session";
import type { User, AuthenticatedUser } from "../../../types";

const App = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [likedMovies, setLikedMovies] = useState<Film[]>([]);
  const [authenticatedUser, setAuthenticatedUser] = useState<MaybeAuthenticatedUser>(() => {
    const stored = localStorage.getItem("authenticatedUser");
    return stored ? JSON.parse(stored) : undefined;
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchFilms().then(setFilms).catch(console.error);
  }, []);

  const onMovieAdded = async (newMovie: NewFilm) => {
    if (!authenticatedUser) return alert("You must be logged in to add a movie");
    //if note admin return
    if (authenticatedUser.username !== "admin") return alert("Only admin can add movies");
    try {
      const created = await addFilm(newMovie, authenticatedUser);
      setFilms(prev => [...prev, created]);
      navigate("/movielist");
    } catch (e) { console.error(e); }
  };

  const onMovieDeleted = async (movie: Film) => {
    if (!authenticatedUser) return;
    try {
      await deleteMovie(movie, authenticatedUser);
      setFilms(prev => prev.filter(f => f.id !== movie.id));
      setLikedMovies(prev => prev.filter(f => f.id !== movie.id));
    } catch (e) { console.error(e); }
  };

  const onMovieLiked = async (movie: Film) => {
    if (!authenticatedUser) return;
    try {
      const liked = await likeFilm(movie, authenticatedUser);
      setLikedMovies(prev => [...prev, liked]);
    } catch (e) { console.error(e); }
  };

const onMovieUpdated = async (updatedMovie: Film) => {
  if (!authenticatedUser) {
    alert("You must be logged in");
    return;
  }

  try {
    const updated = await updateFilm(updatedMovie, authenticatedUser);

    setFilms(prev => prev.map(f => f.id === updated.id ? updated : f));
 console.log(updated.id  , "is updated")
  } catch (e) {
    console.error(e);
    alert("Failed to update movie");
  }
};



  const removeLikedMovie = async (movieId: number) => {
    if (!authenticatedUser) return;
    try {
      await unlikeFilm({ id: movieId } as Film, authenticatedUser);
      setLikedMovies(prev => prev.filter(m => m.id !== movieId));
    } catch (e) { console.error(e); }
  };

  const registerUser = async (newUser: User) => {
    const res = await fetch("/api/auths/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" }
    });
    const createdUser = await res.json();
    setAuthenticatedUser(createdUser);
    storeAuthenticatedUser(createdUser);
  };

  const loginUser = async (user: User) => {
    const res = await fetch("/api/auths/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" }
    });
    const authUser = await res.json();
    setAuthenticatedUser(authUser);
    storeAuthenticatedUser(authUser);
  };

  return (
    <div className="App">
      <Header authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />

      <h1>Welcome to film list</h1>

      <main>
        <Outlet context={{
          movies: films,
          onMovieAdded,
          onMovieLiked,
          onMovieDeleted,
          onMovieRemoved: removeLikedMovie,
          registerUser,
          loginUser,
          authenticatedUser,
          setAuthenticatedUser , 
          onMovieUpdated ,  
        }} />
      </main>

      <p>List of liked movies:</p>
      <ul>
        {likedMovies.map(f => (
          <li key={f.id}>
            {f.title}
            {authenticatedUser && (
              <button onClick={() => removeLikedMovie(f.id)}>Remove</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

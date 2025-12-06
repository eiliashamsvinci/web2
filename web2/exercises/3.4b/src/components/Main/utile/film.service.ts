import type { AuthenticatedUser, Film, NewFilm } from "../../../types";

const fetchFilms = async (): Promise<Film[]> => {
  try {
    const res = await fetch("/api/films"); 

    if (!res.ok) {
      throw new Error("Failed to fetch movies: " + res.statusText);
    }

    const data = await res.json();

    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data format: expected an array of films");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addFilm = async (movie: NewFilm, authenticatedUser: AuthenticatedUser): Promise<Film> => {
  if (!authenticatedUser) throw new Error("User must be logged in");

  const res = await fetch("/api/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authenticatedUser.token}`,
    },
    body: JSON.stringify(movie),
  });

  if (res.status === 401) throw new Error("Unauthorized: You must be admin to add a movie");
  if (!res.ok) throw new Error("Failed to add movie: " + res.statusText);

  return await res.json();
};



const deleteMovie = async (movie: Film, authenticatedUser: AuthenticatedUser): Promise<void> => {
  try {
    const res = await fetch(`/api/films/${movie.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${authenticatedUser.token}`, // JWT
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete movie: " + res.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const likeFilm = async (movie: Film, authenticatedUser: AuthenticatedUser): Promise<Film> => {
  try {
    const res = await fetch(`/api/films/${movie.id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authenticatedUser.token}`, // JWT
      },
    });

    if (!res.ok) {
      throw new Error("Failed to like movie: " + res.statusText);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const unlikeFilm = async (movie: Film, authenticatedUser: AuthenticatedUser): Promise<void> => {
  try {
    const res = await fetch(`/api/films/${movie.id}/like`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${authenticatedUser.token}`, // JWT
      },
    });

    if (!res.ok) {
      throw new Error("Failed to unlike movie: " + res.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const updateFilm = async (movie: Film, auth: AuthenticatedUser): Promise<Film> => {
  try {
    const res = await fetch(`/api/films/${movie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.token
      },
      body: JSON.stringify(movie)
    });

    if (!res.ok) {
      throw new Error("Failed to update movie: " + res.statusText);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};



export { fetchFilms, addFilm, deleteMovie, likeFilm, unlikeFilm , updateFilm };

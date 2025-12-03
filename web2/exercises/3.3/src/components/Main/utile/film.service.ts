import type { Film, NewFilm } from "../../../types";

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

const addFilm = async (movie: NewFilm): Promise<Film> => {
  try {
    const res = await fetch("/api/films", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    });

    if (!res.ok) {
      throw new Error("Failed to add movie: " + res.statusText);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const likeFilm = async (movie: NewFilm): Promise<Film> => {
  try {
    const res = await fetch("/api/films", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    });

    if (!res.ok) {
      throw new Error("Failed to add movie: " + res.statusText);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const DeleteLikeFilm = async (Movie : Film) : Promise<void> => {
  try {
    const res = await fetch(`/api/films/${Movie.id}` , {
      method : "DELETE" , 
    }) ;

    if (!res.ok) {
      throw new Error("Failed to delete movie: " + res.statusText);
    }
    return ; 
  } catch (error) {
    console.error(error);
    throw error;
  }
} ;

export { fetchFilms, addFilm, DeleteLikeFilm , likeFilm };
import { Film, NewFilm } from "../types";
import path from "node:path";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

export const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
    imageUrl: "https://image.tmdb.org/t/p/inception.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    description: "A team of explorers travels through a wormhole in space.",
    imageUrl: "https://image.tmdb.org/t/p/interstellar.jpg",
  },
  {
    id: 3,
    title: "The Matrix",
    director: "The Wachowskis",
    duration: 136,
    budget: 63,
    description: "A computer hacker learns about the true nature of reality.",
    imageUrl: "https://image.tmdb.org/t/p/matrix.jpg",
  },
];

function readAllFilms(minDuration?: number, startsWith?: string): Film[] {
  const films = parse(jsonDbPath, defaultFilms);

  let filteredFilms = films;

  // filter by minDuration
  if (minDuration) {
    filteredFilms = filteredFilms.filter((film) => film.duration >= minDuration);
  }

  // filter by title startsWith
  if (startsWith) {
    const lowerStart = startsWith.toLowerCase();
    filteredFilms = filteredFilms.filter((film) =>
      film.title.toLowerCase().startsWith(lowerStart)
    );
  }

  return filteredFilms;
}


function readFilmWithId(id: Number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const foundFilm = films.find((film) => id === film.id);
  if (!foundFilm) {
    return undefined;
  }
  return foundFilm;
}

function createNewFilms(newFilm: NewFilm): Film {
  const films = parse(jsonDbPath, defaultFilms);

  const nextId =
    films.reduce((Maxid, film) => (film.id > Maxid ? film.id : Maxid), 0) + 1;

  const createFilm = {
    id: nextId,
    ...newFilm,
  };
  films.push(createFilm);
  serialize(jsonDbPath, films);
  return createFilm;
}

function deleteFilm(id: Number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const deleteFilter = films.findIndex((film) => id === film.id);
  if (deleteFilter === -1) {
    return undefined;
  }
  const deletedElements = films.splice(deleteFilter, 1);
  serialize(jsonDbPath, films);

  return deletedElements[0];
}

function updatafilms(filmsId: Number,newFilm: Partial<NewFilm>): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const findFilm = films.find((film) => film.id === filmsId);

  if (!findFilm) {
    return undefined;
  }
  if (newFilm.title !== undefined) {
    findFilm.title = newFilm.title;
  }
  if (newFilm.budget !== undefined) {
    findFilm.budget = newFilm.budget;
  }
  if (newFilm.description !== undefined) {
    findFilm.description = newFilm.description;
  }
  if (newFilm.director !== undefined) {
    findFilm.director = newFilm.director;
  }
    if (newFilm.imageUrl !== undefined) {
    findFilm.imageUrl = newFilm.imageUrl;
  }
    if (newFilm.duration !== undefined) {
    findFilm.duration = newFilm.duration;  
 }
  serialize(jsonDbPath, films);
  return findFilm ; 
}

function replaceFilm(id: Number, newFilm: NewFilm): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return undefined;
  }

  const replacedFilm: Film = {
    id: Number(id),
    title: newFilm.title,
    director: newFilm.director,
    duration: newFilm.duration,
    budget: newFilm.budget,
    description: newFilm.description,
    imageUrl: newFilm.imageUrl,
  };

  films[index] = replacedFilm;
  serialize(jsonDbPath, films);
  return replacedFilm;
}


export { readAllFilms, readFilmWithId, createNewFilms, deleteFilm , updatafilms , replaceFilm };

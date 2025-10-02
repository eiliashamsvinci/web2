import { Film, NewFilm } from "../types";

import { Router } from "express";
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
const router = Router();

// router.get("/", (_req, res) => {
//   return res.json(films);
// });

router.get("/:id", (req, res) => {
  const Id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const resultFilm = films.find((film) => film.id === Id);
  if (!resultFilm) {
    return res.sendStatus(404);
  }
  return res.json(resultFilm);
});

//get with duration filter
router.get("/", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
  let filteredFilms = films;

  if (req.query["minimum-duration"]) {
    const minDuration = Number(req.query["minimum-duration"]);

    if (minDuration <= 0) {
      return res.sendStatus(400);
    }
    filteredFilms = filteredFilms.filter(
      (film) => film.duration >= minDuration
    );
  }
  if (req.query["starts-with"]) {
    const startElement = String(req.query["starts-with"]).toLowerCase();
    filteredFilms = filteredFilms.filter((film) =>
      film.title.toLowerCase().startsWith(startElement)
    );
  }
  filteredFilms.sort((a, b) => a.title.localeCompare(b.title));
  if (filteredFilms.length === 0) {
    return res.sendStatus(404);
  }
  return res.json(filteredFilms);
});

//add new film
router.post("/", (req, res) => {
  const { title, director, duration, budget, description, imageUrl } = req.body;
  const films = parse(jsonDbPath, defaultFilms);
  if (!title || !director || !duration) {
    console.log(" invalid input");
    return res.sendStatus(400);
  }
  if (duration <= 0 || (budget !== undefined && budget <= 0)) {
    return res.sendStatus(400);
  }

  const nextId =
    films.reduce((maxId, film) => {
      if (film.id > maxId) {
        maxId = film.id;
      }
      return maxId;
    }, 0) + 1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
  };

  for (const element of films) {
    if (
      newFilm.title === element.title &&
      newFilm.director === element.director
    ) {
      return res.sendStatus(409);
    }
  }

  if (budget !== undefined) newFilm.budget = budget;
  if (description !== undefined) newFilm.description = description;
  if (imageUrl !== undefined) newFilm.imageUrl = imageUrl;

  films.push(newFilm);
  //seriqlsize
  serialize(jsonDbPath, films);
  return res.json(newFilm);
});

//DELETE FILM
router.delete("/:id", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deleteFilm = films.splice(index, 1);
  serialize(jsonDbPath, films);
  return res.json(deleteFilm[0]);
});

router.put("/:id", (req, res) => {
  const Id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((f) => f.id === Id);

  const { title, director, duration, budget, description, imageUrl } = req.body;

  if (!title || !director || !duration) return res.sendStatus(400);
  if (duration <= 0 || (budget !== undefined && budget <= 0))
    return res.sendStatus(400);

  const updatedFilm: Film = { id: Id, title, director, duration };
  if (budget !== undefined) updatedFilm.budget = budget;
  if (description !== undefined) updatedFilm.description = description;
  if (imageUrl !== undefined) updatedFilm.imageUrl = imageUrl;

  if (index !== -1) {
    serialize(jsonDbPath, films);
    return res.status(201).json(updatedFilm);
  } else {
    serialize(jsonDbPath, films);
    films[index] = updatedFilm;
    return res.status(201).json(updatedFilm);
  }
});

router.patch("/:id", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
  const id = Number(req.params.id);
  const film = films.find((f) => f.id === id);

  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && typeof body.description !== "string") ||
    ("imageUrl" in body && typeof body.imageUrl !== "string")
  ) {
    return res.sendStatus(400);
  }

  const {
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  }: Partial<NewFilm> = body;

  if (title) film.title = title;
  if (director) film.director = director;
  if (duration) film.duration = duration;
  if (budget !== undefined) film.budget = budget;
  if (description !== undefined) film.description = description;
  if (imageUrl) film.imageUrl = imageUrl;

  serialize(jsonDbPath, films);
  return res.json(film);
});

export default router;

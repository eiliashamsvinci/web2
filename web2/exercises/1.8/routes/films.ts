import {  NewFilm } from "../types";

import { Router } from "express";

import {replaceFilm ,  createNewFilms , readAllFilms ,readFilmWithId  , updatafilms , deleteFilm } from "../services/films";


const router = Router();

// router.get("/", (_req, res) => {
//   return res.json(films);
// });

router.get("/error", (_req, _res, _next) => {
  throw new Error("This is an error");
  // equivalent of next(new Error("This is an error"));
});
router.get("/", (req, res) => {
  const minDuration = req.query.minDuration ? Number(req.query.minDuration) : undefined;
  const startsWith = req.query["starts-with"] as string | undefined;

  const films = readAllFilms(minDuration, startsWith);
  return res.json(films);
});



router.get("/:id", (req, res) => {
  const Id = Number(req.params.id);
  const films = readFilmWithId(Id);
  if (!films) {
    return res.sendStatus(404);
  }
  return res.json(films);
});

//get with duration filter

//add new film
router.post("/", (req, res) => {
  const { title, director, duration, budget, description, imageUrl } = req.body;

  if (!title || !director || !duration) {
    return res.sendStatus(400);
  }

  const newFilm = createNewFilms({ title, director, duration, budget, description, imageUrl });

  if (!newFilm) {
    return res.sendStatus(400);
  }

  return res.status(201).json(newFilm);
});

//DELETE FILM
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletedFilm = deleteFilm(id);

  if (!deletedFilm) {
    return res.sendStatus(404);
  }
  return res.json(deletedFilm);
});

// router.put("/:id", (req, res) => {
//   const Id = Number(req.params.id);
//   const films = parse(jsonDbPath, defaultFilms);
//   const index = films.findIndex((f) => f.id === Id);

//   const { title, director, duration, budget, description, imageUrl } = req.body;

//   if (!title || !director || !duration) return res.sendStatus(400);
//   if (duration <= 0 || (budget !== undefined && budget <= 0))
//     return res.sendStatus(400);

//   const updatedFilm: Film = { id: Id, title, director, duration };
//   if (budget !== undefined) updatedFilm.budget = budget;
//   if (description !== undefined) updatedFilm.description = description;
//   if (imageUrl !== undefined) updatedFilm.imageUrl = imageUrl;

//   if (index !== -1) {
//     serialize(jsonDbPath, films);
//     return res.status(201).json(updatedFilm);
//   } else {
//     serialize(jsonDbPath, films);
//     films[index] = updatedFilm;
//     return res.status(201).json(updatedFilm);
//   }
// });

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const existingFilm = readFilmWithId(id);

  if (!existingFilm) {
    return res.sendStatus(404);
  }

  const body: Partial<NewFilm> = req.body;

  // Validation
  if (
    ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && typeof body.description !== "string") ||
    ("imageUrl" in body && typeof body.imageUrl !== "string")
  ) {
    return res.sendStatus(400);
  }

  const updatedFilm = updatafilms(id, body);

  return res.json(updatedFilm);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, director, duration, budget, description, imageUrl } = req.body;

  if (!title || !director || !duration) return res.sendStatus(400);
  if (duration <= 0 || (budget !== undefined && budget <= 0)) return res.sendStatus(400);

  const newFilm: NewFilm = { title, director, duration, budget, description, imageUrl };
  const replacedFilm = replaceFilm(id, newFilm);

  if (!replacedFilm) {
    return res.sendStatus(404);
  }
  return res.status(200).json(replacedFilm);
});


export default router;

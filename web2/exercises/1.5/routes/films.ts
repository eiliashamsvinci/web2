import { Film } from "../types";
import  { Router } from "express";

export const films: Film[] = [
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
  const resultFilm = films.find((film) => film.id === Id);
  if (!resultFilm) {
    return res.sendStatus(404);
  }
  return res.json(resultFilm);
});



//get with duration filter
router.get("/", (req, res) => {

  let filteredFilms = films;

  if (req.query["minimum-duration"]) {
    const minDuration = Number(req.query["minimum-duration"]);

    if (minDuration <= 0) {
      return res.sendStatus(400);
    }
    filteredFilms = filteredFilms.filter(film => film.duration >= minDuration);
  }
  if (req.query["starts-with"]) {
    const startElement = String(req.query["starts-with"]).toLowerCase();
    filteredFilms = filteredFilms.filter(film =>
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
  // const body : unknown = req.body ; 
  // if(!body || typeof body !=="object"|| !("title" in body) ||  !("director" in body) || typeof body.title !=="string" )

  const { title, director, duration, budget, description, imageUrl } = req.body;

  if (!title || !director || !duration) {
    console.log(" invalid input")
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
      return maxId; }, 0) + 1;

      
  const newFilm: Film = {

    id: nextId,
    title,
    director,
    duration,
  };

  for (const element of films) {
    if(newFilm.title === element.title && newFilm.director === element.director ) {
     return res.sendStatus(409) ; 
    }
  }

  if (budget !== undefined) newFilm.budget = budget;
  if (description !== undefined) newFilm.description = description;
  if (imageUrl !== undefined) newFilm.imageUrl = imageUrl;

  films.push(newFilm);
  return res.json(newFilm);
});



export default router;

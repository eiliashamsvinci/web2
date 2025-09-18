 import { Film } from "../types";
 import { Router } from "express";


export const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "A thief who steals corporate secrets through dream-sharing technology.",
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
  }
];
const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;
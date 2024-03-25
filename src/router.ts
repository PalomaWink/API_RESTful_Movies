import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieController";

//validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()
// Qaudno temos verbos HTTP que são diferentes podemos utilizar a mesma rota.
export default router
  .get('/test', (req: Request, res: Response) => {
    return res.status(200).send("API funcionando!")
  })
  .post("/movie", validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movies", getAllMovies)
  .delete("/movie/:id", removeMovie)
  .patch("/movie/:id", validate, movieCreateValidation, updateMovie)
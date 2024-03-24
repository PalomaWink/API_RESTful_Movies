import { Router, Request, Response } from "express";
import { createMovie, findMovieById } from "./controllers/movieController";

//validations
import { validate } from "./middleware/handleValidation";

const router = Router()

export default router
  .get('/test', (req: Request, res: Response) => {
    return res.status(200).send("API funcionando!")
  })
  .post("/movie", validate, createMovie)
  .get("/movie/:id", findMovieById)
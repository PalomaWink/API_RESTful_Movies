import { Request, Response } from "express";

//Model
import { MovieModel } from "../models/Movie";

//Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const movie = await MovieModel.create(req.body);
    return res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Error creating movie: ${error.message}`);
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {

    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error(`Error finding movie: ${error.message}`);
  }
}
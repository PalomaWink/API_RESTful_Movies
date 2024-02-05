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
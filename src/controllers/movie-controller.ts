import { Request, Response } from "express"
import { Movie } from "../protocols/movie"
import movieSchema from "../schemas/movie-schema"
import movieService from "../services/movie-service";

async function create(req: Request, res: Response) {
    const movie = req.body as Movie

    const { error } = movieSchema.validate(movie, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(409).send(errors)
    }
    try{
        await movieService.create(movie)
    } catch (err){
        return res.status(500).send(err.message)
    }
}

async function get(req: Request, res: Response) {

}

async function update(req: Request, res: Response) {

}

async function exclude(req: Request, res: Response) {

}

export default {
    create,
    get,
    update,
    exclude
}
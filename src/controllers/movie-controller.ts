import { Request, Response } from "express"
import { Movie } from "../protocols/movie.js"
import movieSchema from "../schemas/movie-schema.js"
import movieService from "../services/movie-service.js";
import updateSchema from "../schemas/update-schema.js";

async function create(req: Request, res: Response) {
    const movie = req.body as Movie

    const { error } = movieSchema.validate(movie, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(409).send(errors)
    }
    try {
        await movieService.create(movie)
        return res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

async function get(req: Request, res: Response) {
    try {
        const { rows: movies } = await movieService.get()
        return res.status(200).send(movies)
    } catch (err) {
        return res.status(500).send(err.message)
    }

}

async function update(req: Request, res: Response) {
    const update: { watched: boolean, resume: string } = req.body
    const { id } = req.params
    const { error } = updateSchema.validate(update, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(409).send(errors)
    }
    try {
        await movieService.update(update, id)
        return res.sendStatus(201)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

async function exclude(req: Request, res: Response) {
    const { id } = req.params

    try{
        await movieService.exclude(id)
        return res.sendStatus(200)
    }catch(err){
        return res.status(500).send(err.message)
    }
}

export default {
    create,
    get,
    update,
    exclude
}
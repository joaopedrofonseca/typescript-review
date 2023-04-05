import { Movie } from "../protocols/movie.js";
import movieRepository from "../repositories/movie-repository.js";


async function create(movie: Movie) {
    await movieRepository.create(movie)
}

async function get() {
    const movies = await movieRepository.get()
    return movies
}

async function update(update:{ watched: boolean, resume: string },id: string) {
    await movieRepository.update(update, id)
}

async function exclude(id: string) {
    await movieRepository.exclude(id)
}

export default {
    create,
    get,
    update,
    exclude
}
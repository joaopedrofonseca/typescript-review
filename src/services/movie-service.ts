import { Movie } from "../protocols/movie";
import movieRepository from "../repositories/movie-repository";


async function create(movie: Movie) {
    
    await movieRepository.create(movie)
}

async function get() {

}

async function update() {

}

async function exclude() {

}

export default {
    create,
    get,
    update,
    exclude
}
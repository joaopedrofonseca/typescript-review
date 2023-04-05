import connectionDb from "../config/database"
import { Movie } from "../protocols/movie"
import { QueryResult } from "pg";

async function create(movie: Movie): Promise<QueryResult<Movie>> {
    return connectionDb.query(
        `INSERT INTO movies(name, stream, gender, watched) VALUES ($1,$2,$3,$4);`,
        [movie.name, movie.stream, movie.gender, movie.watched]
    )
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
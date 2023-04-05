import connectionDb from "../config/database.js"
import { Movie } from "../protocols/movie.js"
import { QueryResult } from "pg";

async function create(movie: Movie): Promise<QueryResult> {
    return connectionDb.query(
        `INSERT INTO movies(name, stream, gender, watched) VALUES ($1,$2,$3,$4);`,
        [movie.name, movie.stream, movie.gender, movie.watched]
    )
}

async function get(): Promise<QueryResult<Movie>> {
    return connectionDb.query(
        `SELECT * FROM movies;`
    )
}

async function update(update: { watched: boolean, resume: string }, id: string): Promise<QueryResult> {
    return connectionDb.query(
        `UPDATE movies SET watched=$1, resume=$2 WHERE id=$3;`,
         [update.watched, update.resume, id]
    )
}

async function exclude(id: string) :Promise<QueryResult>{
    return connectionDb.query(
        `DELETE FROM movies WHERE id=$1;`, 
        [id]
    )
}

export default {
    create,
    get,
    update,
    exclude
}
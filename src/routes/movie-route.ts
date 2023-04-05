import { Router } from "express";
import movieController from "../controllers/movie-controller.js";

const movieRouter = Router()

movieRouter.post("/", movieController.create)
movieRouter.get("/", movieController.get)
movieRouter.put("/:id", movieController.update)
movieRouter.delete("/:id", movieController.exclude)

export default movieRouter
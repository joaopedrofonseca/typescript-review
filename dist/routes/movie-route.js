import { Router } from "express";
import movieController from "../controllers/movie-controller.js";
var movieRouter = Router();
movieRouter.post("/", movieController.create);
movieRouter.get("/", movieController.get);
movieRouter.put("/", movieController.update);
movieRouter.delete("/", movieController.exclude);
export default movieRouter;

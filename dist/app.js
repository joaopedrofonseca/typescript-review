import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRouter from "./routes/movie-route";
dotenv.config();
var app = express();
app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.listen(5000, function () { console.log("SERVER RUNNING ON PORT 5000"); });

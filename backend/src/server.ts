import express, { json } from "express";
import "./database/conn";
import cors from "cors";

import path from "path";

import routes from "./routes";
import errorHandler from "./error/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333);

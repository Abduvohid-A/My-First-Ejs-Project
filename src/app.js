import express from "express";
import { connectDB } from "./config/db.js";

export const app = express();
connectDB();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded( {extended : true }));

app.use("/", mainRouter);
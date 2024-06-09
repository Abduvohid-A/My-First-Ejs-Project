import express from "express";
import expressLayout from "express-ejs-layouts";
import path from "node:path";
import { connectDB } from "./config/db.js";
import mainRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

export const app = express();
connectDB();

app.use(expressLayout);
app.set("views", path.join(process.cwd(), "src", "views"));
app.set("layout", "layout/main");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/", mainRouter);

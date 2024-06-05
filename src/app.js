import express from "express";
import expressLayout from "express-ejs-layouts";
import path from "node:path";
import { connectDB } from "./config/db.js";

export const app = express();
connectDB();

app.use(expressLayout);
app.set('views', path.join(process.cwd(), "src", 'views'));
app.set('layout', 'layout/main');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded( {extended : true }));

// app.use("/", mainRouter);
app.get("/", (req, res) => {
    res.render('index', { article : 'Home Page' });
});

app.get("/register", (req, res) => {
    res.render('register', { article : 'Register Page', message : "" });
});

app.get("/login", (req, res) => {
    res.render('login', { article : 'Login Page', message : "" });
});

app.get("/otp", (req, res) => {
    res.render('otp', { article : 'Otp Page', message : "" });
});

app.get("/main", (req, res) => {
    res.render('main', { article : 'Main Page'});
});
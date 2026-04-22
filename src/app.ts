import express from "express";
import hbs from "express-hbs";
import path from "path";
import pool from "./db/postgres.js";

const __dirname = import.meta.dirname;

const app = express();
app.engine('hbs', hbs.express4({partialsDir: path.join(__dirname, "../views/partials")}));
app.set('view engine', 'hbs');
app.use(express.static("../static"));

app.get('/users', (req, res, next) => {
    
    pool.query("SELECT * FROM users;").then(data=> {res.json(data.rows);});
});

export default app;
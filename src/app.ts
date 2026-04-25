import express from "express";
import hbs from "express-hbs";
import path from "path";
import UserRouter from "./api/users/user.router.js";
import ProductRouter from "./api/products/product.router.js";
const __dirname = import.meta.dirname;

const app = express();
app.engine('hbs', hbs.express4({partialsDir: path.join(__dirname, "../views/partials")}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, "../public")));

app.use("/users", UserRouter);
app.use("/products", ProductRouter);


export default app;
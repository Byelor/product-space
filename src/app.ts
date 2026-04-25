import express from "express";
import hbs from "express-hbs";
import path from "path";
import UserRouter from "./modules/users/user.router.js";
import ProductRouter from "./modules/products/product.router.js";
const __dirname = import.meta.dirname;

const app = express();
app.engine('hbs', hbs.express4({partialsDir: path.join(__dirname, "../views/partials"), layoutsDir: path.join(__dirname, "../views/layouts")}));

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, "../public")));




app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);


export default app;
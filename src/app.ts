import express from "express";
import hbs from "express-hbs";
import path from "path";
import UserAPIRouter from "./modules/users/user.api.router.js";
import ProductAPIRouter from "./modules/products/api/product.api.router.js";
import ProductViewRouter from "./modules/products/views/product.view.router.js";
const __dirname = import.meta.dirname;

const app = express();
app.engine('hbs', hbs.express4({partialsDir: path.join(__dirname, "../views/partials"), layoutsDir: path.join(__dirname, "../views/layouts")}));

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, "../public")));




app.use("/api/users", UserAPIRouter);
app.use("/api/products", ProductAPIRouter);

app.use("/products", ProductViewRouter);

export default app;
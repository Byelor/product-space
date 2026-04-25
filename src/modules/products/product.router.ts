import { Router } from "express";
import ProductController from "./api/product.api.controller.js";

class ProductRouter{
    public router: Router = Router();

    constructor(){
        this.initialRoutes();
    }
    private initialRoutes(){
        this.router.get('/', ProductController.getAll);
    }
}
export default new ProductRouter().router;
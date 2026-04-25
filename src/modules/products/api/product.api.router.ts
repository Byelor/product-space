import { Router } from "express";
import ProductAPIController from "./product.api.controller.js";
class ProductRouter{
    public router: Router = Router();

    constructor(){
        this.initialRoutes();
    }
    private initialRoutes(){
        this.router.get('/', ProductAPIController.getAll);
    }
}
export default new ProductRouter().router;
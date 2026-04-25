import { Router } from "express";
import ViewProductController from "../views/product.view.controller.js";
class ProductRouter{
    public router: Router = Router();

    constructor(){
        this.initialRoutes();
    }
    private initialRoutes(){
        this.router.get('/', ViewProductController.renderAll);
    }
}
export default new ProductRouter().router;
import userController from "./user.controller.js";
import {Router} from "express";

class UserRouter{
    public router: Router = Router();

    constructor(){
        this.initialRoutes();
    }

    initialRoutes(){
        this.router.get('/', userController.getAll);
    }
}

export default new UserRouter().router;
import UserService from "../product.service.js";
import type {Request, Response, NextFunction} from "express";

export default class UserController{
    getAll = async (req: Request, res: Response, next: NextFunction){
        res.render();
    }
}
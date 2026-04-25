import UserService from "../product.service.js";
import type {Request, Response, NextFunction} from "express";

class UserController{
    renderAll = async (req: Request, res: Response, next: NextFunction) => {
        const products = await UserService.getAll();
        res.render("cardsGrid", {
            cardType: "productCard", 
            layout: "layout", 
            products: products
        });
    }
}
export default new UserController();
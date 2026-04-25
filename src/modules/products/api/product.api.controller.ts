import ProductService from "../product.service.js";
import type { Request, Response, NextFunction } from "express";

class ProductController{
    getAll = async(req: Request, res: Response, next: NextFunction) => {
        const data = await ProductService.getAll();
        res.json(data); 
    }
}

export default new ProductController();
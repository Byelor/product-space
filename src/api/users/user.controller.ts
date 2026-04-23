import userService from "./user.service.js";
import express from "express";

class UserController{
    async getAll(req: express.Request, res: express.Response){
        const userArray = await userService.getAll();
        res.json(userArray);
    }
}
export default new UserController();
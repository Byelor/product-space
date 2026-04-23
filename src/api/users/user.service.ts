import pool from "../../db/postgres.js";
import type User from "./user.dto.js";

class UserService{
    
    getAll = async (): Promise<User[]> =>{
        const rawData = await pool.query(`SELECT name, user_id as "userId", hash_password as "hashPassword", email FROM users;`);
        const userArray: User[] = rawData.rows;
        return userArray;
    }
}

export default new UserService();
import pool from "../../db/postgres.js";
import type Product from "./product.dto.js";

class ProductService{
    async getAll() : Promise<Product[]>
    {
        const data = await pool.query(`SELECT title, description, price, user_id AS "userId", product_id AS "productId" FROM products;`);
        const rows: Product[] = data.rows;
        return rows;
    }
}

export default new ProductService();
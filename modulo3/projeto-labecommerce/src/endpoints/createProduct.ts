import { Request, Response } from "express";
import { uuid } from "uuidv4";
import connection from "../data/connection";
import { Product } from "../types";

export const createProduct = async(req: Request, res: Response): Promise<void> => {
    try {
        const {name, price, imageUrl} = req.body
        const newProduct: Product = {
            id: uuid(),
            name,
            price,
            imageUrl
        }
        await connection("labecommerce_products").insert(newProduct)
        res.status(201).send("Produto criado")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
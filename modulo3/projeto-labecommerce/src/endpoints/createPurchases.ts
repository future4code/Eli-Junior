import { Request, Response } from "express";
import { uuid } from "uuidv4";
import connection from "../data/connection";
import { Purchase } from "../types";

export const createPurchases = async(req: Request, res: Response): Promise<void> => {
    try {
        const {userId, productId, quantity, totalPrice} = req.body
        const newPurchase: Purchase = {
            id: uuid(),
            userId, 
            productId,
            quantity,
            totalPrice
        }
        await connection("labecommerce_purchases").insert(newPurchase)
        res.status(201).send("Compra realizada com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
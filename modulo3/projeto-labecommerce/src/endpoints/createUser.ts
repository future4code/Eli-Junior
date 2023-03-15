import { Request, Response } from "express";
import { uuid } from "uuidv4";
import connection from "../data/connection";
import { User } from "../types";

export const createUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const {name, email, password} = req.body
        const newUser: User = {
            id: uuid(), 
            name,
            email,
            password
        }
        await connection("labecommerce_users").insert(newUser)
        res.status(201).send("Usuário criado")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
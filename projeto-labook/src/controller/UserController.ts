import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController {
    async RegistrationController(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            const newUser: UserInputDTO = { name, email, password }
            
            const userBusiness = new UserBusiness()
            await userBusiness.RegistrationBusiness(newUser)
            res.status(201).send("Usuário criado com sucesso")

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}
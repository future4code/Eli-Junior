import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
   
   public createUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name, nickname, email, password } = req.body
   
         const input = {
            name,
            nickname,
            email,
            password
         }
   
         const userBusiness = new UserBusiness
         userBusiness.createUser(input)
   
         res.status(201).send({ message: "Usuário criado!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   public getUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const userBusiness = new UserBusiness
         userBusiness.getUser()
         
         res.send(users).status(200)
      } catch (error: any) {
         res.send(error.message).status(400)
      }
   }
}

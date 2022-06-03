import { v4 as generateId  } from "uuid"
import { UserDatabase } from "../data/UserDatabase"
import { user } from "../types/user"

export class UserBusiness {

   public createUser = async (user: user) => {
      try {
         const {name, email, password} = user
         
         if (
            !name ||
            !email ||
            !password
         ) {
            throw new Error('Please fill all the fields')
         }

         if(email.indexOf("@") === 1) {
            throw new Error("Invalid Email")
         }

         if(password.length < 6) {
            throw new Error("Password must have at least 6 characters")
         }
   
         const id: string = generateId()
   
         const userDatabase = new UserDatabase()
   
         await userDatabase.createUser({
            id,
            email,
            name,
            password
         })
   
      } catch (error: any) {
         throw new Error(error.message || "Error creating user. Please check your system administrator")
      }
   }

   public getUser = async () {
      return await new UserDatabase().get()
   }
}
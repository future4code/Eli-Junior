import { UserDatabase } from "../data/UserDatabase";
import { User, UserInputDTO } from "../model/User";
import { generateId } from "../services/generateId";

export class UserBusiness {
    async RegistrationBusiness(input: UserInputDTO) {
        try {
            const { name, email, password } = input
            if (!name || !email || !password ) {
                throw new Error ("Preencha os dados corretamente")    
            } 
            const id: string = generateId()

            const newUser: User = { id, name, email, password }

            const userDatabase = new UserDatabase()
            await userDatabase.UserRegistration(newUser)

        } catch (error: any) {
            throw new Error (error.sqlMessage || error.message)
        }
    }
}
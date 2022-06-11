import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    async UserRegistration(input: User): Promise<void> {
        try {
            await UserDatabase.connection
            .insert({
                id: input.id,
                name: input.name,
                email: input.email,
                password: input.password
            })
            .into('labook_users')
        } catch (error: any) {
            throw new Error (error.sqlMessage || error.message)
        }
    }

    // async Teste() {

    // }
}
import { PostDatabase } from "../data/PostDatabase";
import { Post, PostInputDTO } from "../model/Post";
import { generateId } from "../services/generateId";

export class PostBusiness {
    async createPostBusiness(input: PostInputDTO) {
        try {
            const { photo, description, createdAt, type } = input

            if ( !photo || !description || !createdAt || !type ) {
                throw new Error("Alguns dados não foram informados. Tente novamente.")
            }
            
            const id: string = generateId()

            const newPost: Post = {
                id,
                photo,
                description,
                type,
                createdAt,
                authorId: ""
            }

            const postDatabase = new PostDatabase()
            await postDatabase.PostRegistration(newPost)

        } catch (error: any) {
            throw new Error (error.sqlMessage || error.message)
        }
    }
}
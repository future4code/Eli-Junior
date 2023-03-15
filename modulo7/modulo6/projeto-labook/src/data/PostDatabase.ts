import { type } from "os";
import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    async PostRegistration(input: Post): Promise<void> {
        await PostDatabase.connection
        .insert({
            id: input.id,
            photo: input.photo,
            description: input.description,
            type: input.type,
            created_at: input.createdAt,
            author_id: input.authorId
        })
        .into('labook_posts')
    }
}
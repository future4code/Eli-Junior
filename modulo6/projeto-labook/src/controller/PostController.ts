import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/Post";

export class PostController {
    async createPostController(req: Request, res: Response) {
        try {
            const { photo, description, createdAt, type } = req.body

            const newPost: PostInputDTO = { photo, description, createdAt, type } 

            const postBusiness = new PostBusiness()
            await postBusiness.createPostBusiness(newPost)
            res.status(201).send("Post criado com sucesso")

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}
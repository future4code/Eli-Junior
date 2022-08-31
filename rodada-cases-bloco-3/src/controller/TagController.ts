import { Request, Response } from "express";
import { TagBusiness } from "../business/TagBusiness";
import { TagInputDTO } from "../model/Tag";

export class TagController {
    async criarTagController(req: Request, res: Response) {
        try {
            const { nome } = req.body

            const inserirTag: TagInputDTO = { nome }
            
            const tag = new TagBusiness()
            await tag.criarTagBusiness(inserirTag)
            res.status(201).send("Tag criado com sucesso")
        } catch (error: any) {
            res.send(error.message)
        }
    }
}
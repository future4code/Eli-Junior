import { Request, Response } from "express";
import { ProdutoETagBusiness } from "../business/ProdutoETagBusiness";
import { ProdutoETagInputDTO } from "../model/ProdutoETag";

export class ProdutoETagController {
    async criarProdutoETagController(req: Request, res: Response) {
        try {
            const { produto_id, tag_id } = req.body

            const inserirProdutoETag: ProdutoETagInputDTO = {
                produto_id, tag_id
            }

            const produtoETag = new ProdutoETagBusiness()
            await produtoETag.criarProdutoETagBusiness(inserirProdutoETag)
            res.status(201).send("Tag ou produto criado com sucesso")
        } catch (error: any) {
            res.send(error.message)
        }
    }
}
import { Request, Response } from "express";
import { ProdutoBusiness } from "../business/ProdutoBusiness";
import { ProdutoInputDTO } from "../model/Produto";

export class ProdutoController {
    async criarProdutoController(req: Request, res: Response) {
        try {
            const {
                nome,
                cor,
                tamanho,
                preco
            } = req.body

            const inserirProduto: ProdutoInputDTO = {
                nome,
                cor,
                tamanho,
                preco
            }

            const produto = new ProdutoBusiness()
            await produto.criarProdutoBusiness(inserirProduto)
            res.status(201).send("Produto criado com sucesso")
        } catch (error: any) {
            res.send(error.message)
        }
    }
}
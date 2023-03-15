import { Router } from "express";
import { ProdutoController } from "../ProdutoController";

export const produtoRouter = Router()

const produto = new ProdutoController()

produtoRouter.post("/criarproduto", produto.criarProdutoController)
produtoRouter.get("/:produto_id", produto.getProdutoIdController)
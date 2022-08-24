import { ProdutoDatabase } from "../data/ProdutoDatabase";
import { ProdutoInputDTO, ProdutoInsert } from "../model/Produto";
import idGenerator from "../services/idGenerator";

export class ProdutoBusiness {
    async criarProdutoBusiness(produto: ProdutoInputDTO) {
        try {
            if (
                !produto.nome || 
                !produto.cor || 
                !produto.tamanho ||
                !produto.preco
                ) {
                throw new Error("Preencha todos os itens solicitados")
            }
            const novoProduto: ProdutoInsert = {
                id: idGenerator.generate(),
                nome: produto.nome,
                cor: produto.cor,
                tamanho: produto.tamanho,
                preco: produto.preco
            }
            const produtoData = new ProdutoDatabase()
            const inserirProduto = await produtoData.criarProduto(novoProduto)
            return inserirProduto
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
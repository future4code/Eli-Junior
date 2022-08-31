import { ProdutoInsert } from "../model/Produto";
import { BaseDatabase } from "./BaseDatabase";

export class ProdutoDatabase extends BaseDatabase {
    private static TABLE_NAME = "amaro_produtos"

    async criarProduto(produto: ProdutoInsert) {
        try {
            await this.getConnection()
            .insert(produto)
            .into(ProdutoDatabase.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getProdutoId(produto_id: string) {
        try {
            const result = await this.getConnection()
            .select("amaro_produtos.nome as produto", "amaro_produtos.cor", "amaro_produtos.tamanho", "amaro_produtos.preco", "amaro_tags.nome as tag")
            .innerJoin("amaro_tags", "amaro_produtos_e_tags.tag_id", "amaro_tags.id")
            .innerJoin("amaro_produtos", "amaro_produtos_e_tags.produto_id", "amaro_produtos.id")
            .where({"amaro_produtos_e_tags.produto_id": produto_id})
            .into("amaro_produtos_e_tags")
            return result[0]
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
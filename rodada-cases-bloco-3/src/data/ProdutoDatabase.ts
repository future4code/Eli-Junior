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
}
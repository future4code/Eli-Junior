import { ProdutoETagInputDTO } from "../model/ProdutoETag";
import { BaseDatabase } from "./BaseDatabase";

export class ProdutoETagDatabase extends BaseDatabase {
    private static TABLE_NAME = "amaro_produtos_e_tags"

    async criarProdutoETag(produtoETag: ProdutoETagInputDTO) {
        try {
            await this.getConnection()
            .insert(produtoETag)
            .into(ProdutoETagDatabase.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
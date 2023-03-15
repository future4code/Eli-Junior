import { ProdutoETagDatabase } from "../data/ProdutoETagDatabase"
import { ProdutoETagInputDTO } from "../model/ProdutoETag"

export class ProdutoETagBusiness {
    async criarProdutoETagBusiness(produtoETag: ProdutoETagInputDTO) {
        try {
            if ( 
                !produtoETag.produto_id ||
                !produtoETag.tag_id
                ) {
                throw new Error("Dado inserido incorretamente")
            }
            for ( let i=0; i < produtoETag.tag_id.length; i++ ) {
                const tagId = produtoETag.tag_id[i]
                const produto: ProdutoETagInputDTO = {
                    produto_id: produtoETag.produto_id,
                    tag_id: [tagId]
                }
                const produtoETagData = new ProdutoETagDatabase()
                await produtoETagData.criarProdutoETag(produto)
            }
            
            return "Tag ou produto inseridos com sucesso"
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
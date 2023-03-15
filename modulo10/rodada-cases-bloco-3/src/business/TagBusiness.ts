import { TagDatabase } from "../data/TagDatabase";
import { TagInputDTO, TagInsert } from "../model/Tag";
import idGenerator from "../services/idGenerator";

export class TagBusiness {
    async criarTagBusiness(tag: TagInputDTO) {
        try {
            if ( !tag.nome ) {
                throw new Error("Dado preenchido incorretamente")
            }

            const novaTag: TagInsert = { 
                id: idGenerator.generate(),
                nome: tag.nome
            }

            const tagData = new TagDatabase()
            const inserirTag = await tagData.criarTag(novaTag)
            return inserirTag
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
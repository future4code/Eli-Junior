import { BaseDatabase } from "./BaseDatabase";
import { TagInsert } from "../model/Tag";

export class TagDatabase extends BaseDatabase {
    private static TABLE_NAME = "amaro_tags"

    async criarTag(tag: TagInsert) {
        try {
            await this.getConnection()
            .insert(tag)
            .into(TagDatabase.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
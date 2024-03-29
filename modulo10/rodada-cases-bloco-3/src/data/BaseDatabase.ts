import { config } from "dotenv";
import knex, { Knex } from "knex";

config();

export class BaseDatabase {
    protected static connection: Knex | null = null
    protected getConnection(): Knex {
        if (!BaseDatabase.connection) {
            BaseDatabase.connection = knex({
                client: "mysql",
	            connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME
            }
        })
        }
        return BaseDatabase.connection
    }
};
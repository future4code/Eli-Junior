import connection from "./connection";
import users from "./users.json";
import products from "./products.json";

const printError = (error: any) => { console.log(error.sqlMessage || error.message ) }

const createTables = () => connection
.raw(`

    CREATE TABLE labecommerce_users(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE labecommerce_products(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        price INT NOT NULL,
        image_url VARCHAR(255)
    );

    CREATE TABLE labecommerce_purchases(
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255),
        product_id VARCHAR(255),
        FOREIGN KEY(user_id) REFERENCES labecommerce_users(id),
        FOREIGN KEY(product_id) REFERENCES labecommerce_products(id),
        quantity INT,
        total_price INT
    );

`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)

const insertUsers = () => connection("labecommerce_users")
    .insert(users)
    .then(() => { console.log("Usuários criados") })
    .catch(printError)

const insertProducts = () => connection("labecommerce_products")
    .insert(products)
    .then(() => { console.log("Produtos criados") })
    .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
    .then(insertUsers)
    .then(insertProducts)
    .finally(closeConnection)

    


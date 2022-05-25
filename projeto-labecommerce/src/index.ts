import { app } from "./app"
import { createProduct } from "./endpoints/createProduct";
import { createPurchases } from "./endpoints/createPurchases";
import { createUser } from "./endpoints/createUser";

app.post("/users", createUser)
app.post("/products", createProduct)
app.post("/purchases", createPurchases)
import { app } from "./controller/app";
import { produtoETagRouter } from "./controller/router/produtoETagRouter";
import { produtoRouter } from "./controller/router/produtoRouter";
import { tagRouter } from "./controller/router/tagRouter";

app.use("/produto", produtoRouter)
app.use("/tag", tagRouter)
app.use("/produtoetag", produtoETagRouter)
<h5>EXERCÍCIO 1</h5>

<p>a) A resposta será a mesma do banco MySQL, pois coloca-se as mesmas informações fornecidas por aquele programa.</p>

<p>b)</p>
```
app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = ${req.body.name}
        `)

        res.status(201).send({ message: "Busca de nome encontrada" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});
```

<p>c)</p>
```
app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection.raw(`
        SELECT COUNT(*), gender FROM Actor GROUP BY gender
        `)

        res.status(201).send({ message: "Contagem feita com sucesso" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});
```

<h5>EXERCÍCIO 2</h5>

<p>a)</p>
```
app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actor")
        .update({
            salary: req.body.salary,
        })
        .where({ id: req.params.id });

        res.status(200).send({ message: "Salário atualizado com sucesso" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});
```

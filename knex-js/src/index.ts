import express, { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

app.get("/actor/:name", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = ${req.params.name}
        `)

        res.send(result[0][0]);
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = ${req.query.gender}
        `)

        res.send(result[0][0]);
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

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

app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actor")
        .delete()
        .where({ id: req.params.id });

        res.status(200).send({ message: "Usuário excluído com sucesso" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection("Actor")
        .avg("Salary is average")
        .where({ gender: req.query.gender });

        res.send(result[0]);
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});


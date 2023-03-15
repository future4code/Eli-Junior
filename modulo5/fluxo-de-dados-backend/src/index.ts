import express, { application, Request, Response } from 'express';
import cors from 'cors';
import { v4 as generateId } from 'uuid';
import { listaProdutos, Product } from './data';

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1

app.get("/test", (req:Request, res:Response) => {
   res.status(200).send("API está funcionando")
})

// Exercício 2 => data.ts

// Exercício 3

app.post("/products", (req:Request, res:Response) => {
   try {
      const name = req.body.name
      const price = req.body.price

      const novoProduto: Product = {
         id: generateId(),
         name,
         price
      }

      listaProdutos.push(novoProduto)

      res.send(listaProdutos)

   } catch(error: any) {
      res.send(error.message || "Erro inesperado")
   }
})

// Exercício 4

app.get("/products", (req:Request, res:Response) => {
   try {
      res.send(listaProdutos)

   } catch(error: any) {
      res.send(error.message || "Erro inesperado")
   }
})

app.listen(3003, () => console.log('Server rodando.....'));



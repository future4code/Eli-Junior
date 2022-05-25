import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { listaAfazeres } from './afazeres';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1

app.get("/ping", (req:Request, res:Response) => {
    res.send("Pong!")
})

// Exercícios 2 e 3 no "afazeres.ts"

// Exercício 4

app.get("/completed", (req:Request, res: Response) => {
    const verTarefa = req.params.completed
    const verTarefasConcluidas = listaAfazeres.filter((tarefa) => {
        if(tarefa.completed == Boolean(verTarefa)) {
            return false
        }
        return true
    })
    res.status(201).send(verTarefasConcluidas)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});





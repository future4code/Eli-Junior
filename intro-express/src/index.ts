import express, { Express, Request, Response } from "express";
import cors from 'cors';
import { AddressInfo } from "net";
import { users } from "./users";
import { posts } from "./posts";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/users/:userId', (req:Request, res:Response) => {
    const userId = req.params.userId
    const returnPostUserId = posts.filter((post) => {
        return post.userId == Number(userId)
    })
    res.status(201).send(returnPostUserId)
})

app.get('/test', (req:Request, res:Response) => {
    const test: string = "Hello world!"
    res.status(201).send(test)
})

app.get('/users', (req:Request, res:Response) => {
    const returnUsers = users.map((user) => {
        return user
    })
    res.status(201).send(returnUsers)
})

// Exercício 6: É melhor criar fora do array de usuários, para que fique mais organizado e mais fácil de acessar.

app.get('/posts', (req:Request, res:Response) => {
    const returnPosts = posts.map((post) => {
        return post
    })
    res.status(201).send(returnPosts)
})

app.delete('/posts/:userId', (req:Request, res:Response) => {
    const userId = req.params.userId
    const deletePostUserId = posts.filter((post) => {
        if(post.id == Number(userId)) {
            return false
        }
        return true
    })
    console.log(deletePostUserId)
    res.status(201).send(deletePostUserId)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


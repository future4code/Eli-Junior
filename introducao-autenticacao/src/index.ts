import app from "./controller/app"
import { v4 } from "uuid"
import * as jwt from "jsonwebtoken"
import { userRouter } from "./controller/userRouter"

export function generateId(): string {
    return v4();
}

const expiresIn = "1min";
function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token;
}

type AuthenticationData = {
    id: string;
}

app.use('/user/', userRouter)

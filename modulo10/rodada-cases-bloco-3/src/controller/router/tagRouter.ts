import { Router } from "express";
import { TagController } from "../TagController";

export const tagRouter = Router()

const tag = new TagController()

tagRouter.post("/criartag", tag.criarTagController)
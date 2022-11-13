import { Request, Response, Router } from "express";
import { createTodo, deleteTodo, getAllTodos, getTodo } from "../controllers/todo.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { todoSchema } from "../schemas/todo.schema.js";

const todoRouter = Router()

todoRouter
    .all("/*", auth)
    .get("/todo", getAllTodos)
    .get("/todo/:todoId", getTodo)
    .post("/todo", validate(todoSchema), createTodo)
    .put("/todo/:todoId", validate(todoSchema), createTodo)
    .delete("/todo/:todoId", deleteTodo)

export default todoRouter
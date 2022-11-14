import { Request, Response, Router } from "express";
import { countTodo, createTodo, deleteTodo, editTodo, getAllTodos, getTodo } from "../controllers/todo.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { todoEditSchema, todoSchema } from "../schemas/todo.schema.js";

const todoRouter = Router()

todoRouter
    .all("/*", auth)
    .get("/todo", getAllTodos)
    .get("/todo/:todoId", getTodo)
    .get("/user/:userId", countTodo)
    .post("/todo", validate(todoSchema), createTodo)
    .put("/todo/:todoId", validate(todoEditSchema), editTodo)
    .delete("/todo/:todoId", deleteTodo)

export default todoRouter
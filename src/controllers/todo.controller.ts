import { Request, Response } from "express"
import todoRepositories from "../repositories/todo.repository.js"


async function getAllTodos(req: Request, res: Response) {
    try {
        const todos = await todoRepositories.find()
        return res.status(200).send(todos)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function getTodo(req: Request, res: Response) {
    const { todoId } = req.params

    try {
        const todo = await todoRepositories.findBytodoId(Number(todoId))
        if (!todo) return res.sendStatus(404)

        res.status(200).send(todo)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function createTodo(req: Request, res: Response) {
    const { userId } = res.locals
    const { name, done } = req.body

    try {
        await todoRepositories.create({ user_id: userId, name, done })
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function editTodo(req: Request, res: Response) {
    const { userId } = res.locals
    const { todoId } = req.params
    const { name, done } = req.body

    if (!todoId) return res.sendStatus(404)

    try {
        const todo = await todoRepositories.findBytodoId(Number(todoId))
        if (!todo) return res.sendStatus(404)

        if (todo.user_id !== userId) return res.sendStatus(401)

        await todoRepositories.edit(Number(todoId), name, done)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function deleteTodo(req: Request, res: Response) {
    const { userId } = res.locals
    const { todoId } = req.params

    if (!todoId) return res.sendStatus(404)

    try {
        const todo = await todoRepositories.findBytodoId(Number(todoId))
        console.log(todo)
        if (!todo) return res.sendStatus(404)

        if (todo.user_id !== userId) return res.sendStatus(401)

        await todoRepositories.delet(Number(todoId))
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}


export {
    getAllTodos,
    getTodo,
    createTodo,
    editTodo,
    deleteTodo
}
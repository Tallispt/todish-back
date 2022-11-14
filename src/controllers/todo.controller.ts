import { todos } from "@prisma/client"
import { Request, Response } from "express"
import { Locals, Params } from "../protocols/index.js"
import todoRepositories from "../repositories/todo.repository.js"
import userRepository from "../repositories/user.repository.js"


async function getAllTodos(req: Request, res: Response) {
    try {
        const todos = await todoRepositories.find()
        return res.status(200).send(todos)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function getTodo(req: Request, res: Response) {
    const { todoId } = req.params as Params

    try {
        const todo = await todoRepositories.findByTodoId(Number(todoId))
        if (!todo) return res.sendStatus(404)

        res.status(200).send(todo)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function createTodo(req: Request, res: Response) {
    const { userId } = res.locals as Locals
    const { name, done } = req.body as todos

    try {
        await todoRepositories.create({ user_id: userId, name, done })
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function editTodo(req: Request, res: Response) {
    const { userId } = res.locals as Locals
    const { todoId } = req.params as Params
    const { name, done } = req.body as todos

    if (!todoId) return res.sendStatus(404)

    try {
        const todo = await todoRepositories.findByTodoId(Number(todoId))
        if (!todo) return res.sendStatus(404)

        if (todo.user_id !== userId) return res.sendStatus(401)

        await todoRepositories.edit(Number(todoId), name, done)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function deleteTodo(req: Request, res: Response) {
    const { userId } = res.locals as Locals
    const { todoId } = req.params as Params

    if (!todoId) return res.sendStatus(404)

    try {
        const todo = await todoRepositories.findByTodoId(Number(todoId))
        console.log(todo)
        if (!todo) return res.sendStatus(404)

        if (todo.user_id !== userId) return res.sendStatus(401)

        await todoRepositories.delet(Number(todoId))
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

async function countTodo(req: Request, res: Response) {
    const { userId } = req.params as Params

    try {
        const user = await userRepository.findUserByUserId(Number(userId))
        if (!user) return res.sendStatus(404)

        const todosCount = await todoRepositories.countByUserId(Number(userId))
        res.status(200).send(todosCount)
    } catch (error) {
        res.sendStatus(500)

    }
}


export {
    getAllTodos,
    getTodo,
    createTodo,
    editTodo,
    deleteTodo,
    countTodo
}
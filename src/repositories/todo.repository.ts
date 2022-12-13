import { Prisma } from "@prisma/client"
import { when } from "joi"
import { prisma } from "../config/prisma.js"

async function find() {
    return await prisma.todos.findMany()
}

async function findByTodoId(todoId: number) {
    return await prisma.todos.findUnique({
        where: {
            id: todoId
        }
    })
}

async function create(data: Prisma.todosUncheckedCreateInput) {
    return await prisma.todos.create({ data })
}

async function edit(todoId: number, name?: string, done?: boolean) {
    return await prisma.todos.update({
        where: {
            id: todoId
        },
        data: {
            name,
            done
        },
    })
}

async function delet(todoId: number) {
    return await prisma.todos.delete({ where: { id: todoId } })
}

async function countByUserId(userId: number) {
    const dones = await prisma.todos.count({
        where: {
            user_id: userId,
            done: true
        }
    })
    const notDones = await prisma.todos.count({
        where: {
            user_id: userId,
            done: false
        }
    })
    return { dones, notDones, total: dones + notDones }
}

const todoRepositories = {
    find,
    findByTodoId,
    create,
    edit,
    delet,
    countByUserId
}

export default todoRepositories
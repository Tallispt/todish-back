import { Prisma } from "@prisma/client"
import { when } from "joi"
import { prisma } from "../database/prisma.js"

async function find() {
    return await prisma.todos.findMany()
}

async function findBytodoId(todoId: number) {
    return await prisma.todos.findUnique({ where: { id: todoId } })
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

const todoRepositories = {
    find,
    findBytodoId,
    create,
    edit,
    delet
}

export default todoRepositories
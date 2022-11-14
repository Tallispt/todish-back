
import { todos } from '@prisma/client'
import joi from 'joi'

const todoSchema = joi.object<todos>({
    name: joi.string().required(),
    done: joi.boolean()
})

const todoEditSchema = joi.object<todos>({
    name: joi.string(),
    done: joi.boolean()
})

export { todoSchema, todoEditSchema }
import joi from 'joi'

export const todoSchema = joi.object({
    name: joi.string().required(),
    done: joi.boolean()
})
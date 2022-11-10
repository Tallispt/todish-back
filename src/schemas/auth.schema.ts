import joi from 'joi';

const signinSchema = joi.object({
    username: joi.string().max(10).required(),
    password: joi.string().required()
})

const signupSchema = joi.object({
    username: joi.string().max(10).required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required()
})

export {
    signinSchema,
    signupSchema
}
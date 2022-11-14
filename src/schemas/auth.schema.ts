import joi from 'joi';
import { SignUp } from '../protocols';

const signinSchema = joi.object<Omit<SignUp, "confirmPassword">>({
    username: joi.string().max(10).required(),
    password: joi.string().required()
})

const signupSchema = joi.object<SignUp>({
    username: joi.string().max(10).required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required()
})

export {
    signinSchema,
    signupSchema
}
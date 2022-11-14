export type SignUp = {
    username: string,
    password: string,
    confirmPassword: string
}

export type Locals = {
    userId: number
}

export type Params = {
    userId?: number,
    todoId?: number
}
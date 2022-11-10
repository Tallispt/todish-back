export type SignUp = {
    username: string,
    password: string,
    confirmPassword: string
}

export type UserData = Omit<SignUp, 'confirmPassword'>
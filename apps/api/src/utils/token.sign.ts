import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()


interface IToken {
    email: string
}

export const encodeToken = async ({ email }: IToken) => {
    return await jwt.sign(
        { data: { email} },
        "secret_key"
        , { expiresIn: '1h' })
}
export const decodeToken = (token: string) => {
    return jwt.verify(token, "secret_key")
}
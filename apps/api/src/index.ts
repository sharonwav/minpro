import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routers'
import { prisma } from './connection'


dotenv.config()
const app: Express = express()
const port = 5000
app.use(express.json())

const corsOption = {
    origin: '*',
    credentials: true
}
app.use(cors(corsOption))
app.use('/api', router)

interface IError extends Error {
    msg: string,
    status: number
}

app.use((error: IError, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    
    res.status(error.status || 500).json({
        error: true,
        message: error.msg || error.message,
        data: {}
    })
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
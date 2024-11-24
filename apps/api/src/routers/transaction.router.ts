import {Router} from "express"
import {createTransaction} from "@/controllers/transaction.controller"
const transactionRouter = Router()

transactionRouter.post('/create', createTransaction)

export default transactionRouter
import { Request, Response, NextFunction } from "express";
import {createTransactionService} from "@/services/transaction.service"

export const createTransaction = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            totalPrice,
            eventId,
            tokenAuth
        } = req.body

         const tokenPayment = createTransactionService({
            totalPrice,
            eventId,
            tokenAuth
        })
        
        res.status(201).json({
            error: false,
            message: 'Create Review Success',
            data: tokenPayment
        })
    } catch (error) {
        next(error)
    }
}
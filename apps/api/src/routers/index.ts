import { Router } from "express";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import creatorRouter from "./creator.router";
import eventRouter from "./event.router";
import reviewRouter from "./review.router";
import transactionRouter from "./transaction.router";

const router = Router()
router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/creator', creatorRouter)
router.use('/event', eventRouter)
router.use('/review', reviewRouter)
router.use('/transaction', transactionRouter)

export default router
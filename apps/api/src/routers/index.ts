import { Router } from "express";
import authRouter from "./auth.router";
import userRouter from "./user.router";
import creatorRouter from "./creator.router";

const router = Router()
router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/creator', creatorRouter)


export default router
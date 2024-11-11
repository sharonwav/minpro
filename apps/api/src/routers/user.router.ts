import { Router } from "express";
const userRouter = Router();
import { createUser } from "@/controllers/user.controller";
import { verifyToken } from "@/middleware/validatetoken";


userRouter.post('/create-user' ,createUser);

export default userRouter;
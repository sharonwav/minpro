import { Router } from "express";
import { authLogin} from "../controllers/auth.controller";
import { verifyToken } from "@/middleware/validatetoken";
import { authLoginCreator } from "../controllers/auth.controller";
const authRouter = Router()
authRouter.post('/login/user', authLogin)
authRouter.post('/login/creator', authLoginCreator)
authRouter.get('/', verifyToken)
export default authRouter
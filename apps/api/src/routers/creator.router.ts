import { Router } from "express";
const creatorRouter = Router();
import { createCreator } from "@/controllers/creator.controller";



creatorRouter.post('/create-creator' ,createCreator);

export default creatorRouter;
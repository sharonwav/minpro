import { Router } from "express";
import { createEvent } from "@/controllers/event.controller";
import { uploader } from "@/middleware/uploader";
const eventRouter = Router();

eventRouter.post('/create', uploader, createEvent )

export default eventRouter;
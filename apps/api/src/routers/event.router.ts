import { Router } from "express";
import { createEvent, getAllEvents, getEventFilterCTR } from "@/controllers/event.controller";
import { uploader } from "@/middleware/uploader";
const eventRouter = Router();

eventRouter.post('/create', uploader, createEvent )
eventRouter.post('/get-filter-event', getEventFilterCTR)
eventRouter.get('/all', getAllEvents)

export default eventRouter;
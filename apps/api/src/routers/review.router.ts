import { Router } from "express";
import { createReview, getReview } from "@/controllers/review.controller";
const reviewRouter = Router();

reviewRouter.post('/create', createReview) 
reviewRouter.get('/get/:eventId', getReview)

export default reviewRouter;
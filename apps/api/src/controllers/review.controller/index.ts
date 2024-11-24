import { Request, Response, NextFunction } from "express";
import { createReviewService, getReviewService } from "@/services/review.service";

export const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            rating,
            comments,
            eventId,
            token,
        } = req.body

        await createReviewService({
            rating,
            comments,
            eventId,
            token,
        })

        res.status(201).json({
            error: false,
            message: 'Create Review Success',
        })
    } catch (error) {
        next(error)
    }
}

export const getReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { eventId } = req.params

        const eventIdNumber = Number(eventId)

        const getReview = await getReviewService({
            eventId: eventIdNumber,
        })

        res.status(200).json({
            error: false,
            message: 'Get Review Success',
            data: getReview
        })
    } catch (error) {
        next(error)
    }
}
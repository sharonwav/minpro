import { Request, Response, NextFunction } from "express";
import { createEventService } from "@/services/event.service";

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const imagesUploaded = req?.files
        const {
            name,
            image,
            startDate,
            endDate,
            startTime,
            endTime,
            location,
            address,
            url,
            description,
            termsAndCondition,
            ticketName,
            qty,
            price,
            ticketDescription,
            ticketStartDate,
            ticketEndDate,
            ticketStartTime,
            ticketEndTime,
            dataTickets,
            creatorId
        } = req.body


        await createEventService({
            name,
            image,
            startDate,
            endDate,
            startTime,
            endTime,
            location,
            address,
            url,
            description,
            termsAndCondition,
            creatorId,
            ticketName,
            qty,
            price,
            ticketDescription,
            ticketStartDate,
            ticketEndDate,
            ticketStartTime,
            ticketEndTime,
            dataTickets,
            imagesUploaded
        })

        res.status(201).json({
            error: false,
            message: 'Create Event Success',
            data: {
            name,
            image,
            startDate,
            endDate,
            startTime,
            endTime,
            location,
            address,
            url,
            description,
            termsAndCondition,
            ticketName,
            qty,
            price,
            ticketDescription,
            ticketStartDate,
            ticketEndDate,
            ticketStartTime,
            ticketEndTime,
            dataTickets,
            creatorId,
            imagesUploaded
            }
        })
       
    } catch (error) {
        next(error)
        console.log(error)
    }
}
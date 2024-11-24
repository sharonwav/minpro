import { Request, Response, NextFunction } from "express";
import { createEventService, getEventFilter, getAllEventService } from "@/services/event.service";

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const imagesUploaded = req?.files as Express.Multer.File[]
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
            creatorId,
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

export const getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const events = await getAllEventService();

        res.status(200).json({
            error: false,
            message: 'Get All Events Success',
            data: events,
        });
    } catch (error) {
        next(error);
    }
}

export const getEventFilterCTR = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { filterName } = req.body

        const filterEvent = await getEventFilter({
            filterName
        })

        res.status(200).json({
            error: false,
            message: 'Get Event Filter Success',
            data: filterEvent
        })
    } catch (error) {
        next(error)
    }
}
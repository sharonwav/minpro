import { prisma } from "@/connection";
import IEvent from "./types";

export const createEventService = async({
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

}: IEvent) => {
    
    await prisma.$transaction(async(tx) => {
        const createEvent = await tx.event.create({
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
                creatorId,
                imagesUploaded
            }
        })

        const listTicket = dataTickets.map((ticket) => ({
            ...ticket,
            eventId: createEvent.id, 
        }));

        await tx.eventTicket.createMany({
            data : listTicket
        })

    })
}
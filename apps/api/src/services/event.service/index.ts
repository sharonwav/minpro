import { prisma } from "@/connection";
import IEvent, {IEventGetFilter} from "./types";

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
                // imagesUploaded
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

export const getAllEventService = async () => {
    const events = await prisma.event.findMany({
        include: {
            eventTicket: true, 
        },
    });

    const formattedEvents = events.map(event => ({
        name: event.name,
        image: event.image,
        startDate: event.startDate,
        endDate: event.endDate,
        startTime: event.startTime,
        endTime: event.endTime,
        location: event.location,
        address: event.address,
        url: event.url,
        description: event.description,
        termsAndCondition: event.termsAndCondition,
        dataTicket: event.eventTicket.map(ticket => ({
            ticketName: ticket.ticketName,
            qty: ticket.qty,
            price: ticket.price,
            ticketDescription: ticket.ticketDescription,
            ticketStartDate: ticket.ticketStartDate,
            ticketEndDate: ticket.ticketEndDate,
            ticketStartTime: ticket.ticketStartTime,
            ticketEndTime: ticket.ticketEndTime,
        })),
    }));

    return formattedEvents;
};

export const getEventFilter = async ({
    filterName
}: IEventGetFilter) => {

    const getEvent = await prisma.$queryRaw`
        SELECT id, name, location, startDate, endDate, startTime, endTime, location, address,description, 
        termsAndCondition FROM events WHERE name LIKE ${'%' + filterName + '%'} or location LIKE ${'%' + filterName + '%'}
        `;

    return getEvent;
}




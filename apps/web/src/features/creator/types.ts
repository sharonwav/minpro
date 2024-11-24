export default interface IEvent {
    name: string,
    image: string,
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string,
    location: string,
    address?: string,
    url?: string,
    description: string,
    termsAndCondition: string,
    ticketName: string,
    qty: number,
    price?: number,
    ticketDescription: string,
    ticketStartDate: string,
    ticketEndDate: string,
    ticketStartTime: string,
    ticketEndTime: string
}


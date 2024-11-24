import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TicketData {
    ticketName: string;
    qty: number;
    price?: number;
    ticketDescription: string;
    ticketStartDate: string;
    ticketEndDate: string;
    ticketStartTime: string;
    ticketEndTime: string;
    id?: number;
}

interface TicketState {
    dataTickets: TicketData[];
    addDataTicket: (ticket: TicketData) => void;
    updateTicket: (updatedTicket: TicketData) => void; // Added update function
    deleteTicket: (ticketName: string) => void
}

const useTicketStore = create<TicketState>()(
    persist(
        (set) => ({
            dataTickets: [],
            addDataTicket: (ticket: TicketData) =>
                set((state) => ({ dataTickets: [...state.dataTickets, ticket] })),
            updateTicket: (updatedTicket: TicketData) =>
                set((state) => ({
                    dataTickets: state.dataTickets.map((ticket) =>
                        ticket.id === updatedTicket.id ? updatedTicket : ticket
                    ),
                })),
            deleteTicket: (ticketName: string) => 
                set((state) => ({dataTickets: state.dataTickets.filter((item)=> item.ticketName != ticketName)}))
                
        }),
        {
            name: "event-data", //This name should be unique for your application
        }
    )
);

export default useTicketStore;
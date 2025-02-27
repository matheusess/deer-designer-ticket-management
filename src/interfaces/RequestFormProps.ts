import { Ticket } from "./Ticket";

export interface RequestFormProps {
    onTicketAdded: (ticket: Ticket) => void;
}
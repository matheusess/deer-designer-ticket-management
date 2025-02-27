export interface Ticket {
    id: string;
    title: string;
    description: string;
    deadline: string;
    status: string;
    assignedTo: string | null;
}
// src/hooks/useTicketForm.ts
import { useState } from "react";
import axios from "../api";
import { Ticket } from "../interfaces/Ticket";

interface UseTicketFormProps {
    onTicketAdded?: (ticket: Ticket) => void;
}

export const useTicketForm = (props: UseTicketFormProps) => {
    const { onTicketAdded } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [assignedTo, setAssignedTo] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await axios.post<Ticket>("/tickets", {
            title,
            description,
            deadline,
            assignedTo,
        });

        if (onTicketAdded) onTicketAdded(response.data);
    };

    return {
        title,
        setTitle,
        description,
        setDescription,
        deadline,
        setDeadline,
        assignedTo,
        setAssignedTo,
        handleSubmit,
    };
};
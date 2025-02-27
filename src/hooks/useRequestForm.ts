import { useState } from "react";
import axios from "../api";
import { Ticket } from "../interfaces/Ticket";

interface UseRequestFormProps {
    onTicketAdded?: (ticket: Ticket) => void;
}

export const useRequestForm = ({ onTicketAdded }: UseRequestFormProps) => {
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

        if (onTicketAdded) {
            onTicketAdded(response.data);
        }


        setTitle("");
        setDescription("");
        setDeadline("");
        setAssignedTo("");
    };

    return {
        title, setTitle,
        description, setDescription,
        deadline, setDeadline,
        assignedTo, setAssignedTo,
        handleSubmit,
    };
};
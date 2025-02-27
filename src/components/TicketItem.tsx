import React from "react";
import { Ticket } from "../interfaces/Ticket";

interface TicketItemProps {
  ticket: Ticket;
  onShowModal: (ticket: Ticket) => void;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket, onShowModal }) => {
  return (
    <li
      className="list-group-item"
      onClick={() => onShowModal(ticket)}
      role="button"
    >
      <div className="row align-items-center">
        <div className="col-2 text-truncate">
          <strong>#{ticket.id}</strong>
        </div>
        <div className="col-4 text-truncate">{ticket.title}</div>
        <div className="col-3 text-center">
          <span className="badge bg-info text-dark">
            {ticket.assignedTo ? ticket.assignedTo : "Unassigned"}
          </span>
        </div>
        <div className="col-3 text-center">
          <span className="badge bg-secondary">{ticket.status}</span>
        </div>
      </div>
    </li>
  );
};

export default TicketItem;

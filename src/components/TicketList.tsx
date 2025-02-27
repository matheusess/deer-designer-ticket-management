import React, { useState } from "react";
import { Ticket } from "../interfaces/Ticket";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  return (
    <div className="mt-4">
      <h2 className="text-secondary">Tickets</h2>
      <ul className="list-group">
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            className="list-group-item"
            onClick={() => handleShowModal(ticket)}
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
        ))}
      </ul>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTicket && (
            <>
              <p>
                <strong>ID:</strong> {selectedTicket.id}
              </p>
              <p>
                <strong>Title:</strong> {selectedTicket.title}
              </p>
              <p>
                <strong>Description:</strong> {selectedTicket.description}
              </p>
              <p>
                <strong>Deadline:</strong> {selectedTicket.deadline}
              </p>
              <p>
                <strong>Assigned To:</strong> {selectedTicket.assignedTo}
              </p>
              <p>
                <strong>Status:</strong> {selectedTicket.status}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TicketList;

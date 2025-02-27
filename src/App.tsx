import React, { useState } from "react";
import RequestForm from "./components/RequestForm";
import TicketList from "./components/TicketList";
import { Ticket } from "./interfaces/Ticket";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const handleTicketAdded = (newTicket: Ticket) => {
    setTickets((prevTickets) => [...prevTickets, newTicket]);
  };

  return (
    <div
      className="container mt-5 text-center"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      <img
        src="/dd-green-logo.svg"
        alt="Logo"
        className="mb-3"
        style={{ height: "80px" }}
      />
      <h1
        className="text-center mb-4"
        style={{ color: "rgb(67, 181, 160)", fontWeight: "600" }}
      >
        Ticket System
      </h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card p-4 shadow border-0 bg-white"
            style={{ borderRadius: "16px" }}
          >
            <RequestForm onTicketAdded={handleTicketAdded} />
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card p-4 shadow border-0 bg-white mt-3 mt-md-0"
            style={{ borderRadius: "16px" }}
          >
            <TicketList tickets={tickets} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

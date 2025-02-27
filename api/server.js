// api/server.js

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const tickets = [];

const generateRandomId = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

app.get("/api/tickets", (req, res) => {
  res.json(tickets);
});

app.post("/api/tickets", (req, res) => {
  const { title, description, deadline, assignedTo } = req.body;

  const newTicket = {
    id: generateRandomId(),
    title,
    description,
    deadline,
    status: "Pending",
    assignedTo,
  };

  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

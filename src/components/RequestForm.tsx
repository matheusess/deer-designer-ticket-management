import React from "react";
import { RequestFormProps } from "../interfaces/RequestFormProps";
import { useRequestForm } from "../hooks/useRequestForm"; // 🔥 Import do hook
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers = [
  { id: 1, name: "Thiago Carvalho", skills: ["Founder"] },
  { id: 2, name: "Matheus Emmanuel", skills: ["TechLead"] },
  { id: 3, name: "Nadine Garcia", skills: ["People"] },
];

const RequestForm: React.FC<RequestFormProps> = ({ onTicketAdded }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    deadline,
    setDeadline,
    assignedTo,
    setAssignedTo,
    handleSubmit,
  } = useRequestForm({ onTicketAdded });

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-none"
      style={{ borderRadius: "16px" }}
    >
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            borderRadius: "12px",
            padding: "14px",
            fontSize: "14px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ced4da",
            transition: "background-color 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onBlur={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
          style={{
            borderRadius: "12px",
            padding: "14px",
            fontSize: "14px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ced4da",
            transition: "background-color 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onBlur={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
        />
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          style={{
            borderRadius: "12px",
            padding: "14px",
            fontSize: "14px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ced4da",
            transition: "background-color 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onBlur={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
          style={{
            borderRadius: "12px",
            padding: "14px",
            fontSize: "14px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #ced4da",
            transition: "background-color 0.3s ease-in-out",
          }}
          onFocus={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onBlur={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
        >
          <option value="">Select a team member</option>
          {teamMembers.map((member) => (
            <option key={member.id} value={member.name}>
              {member.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="btn text-white w-100"
        style={{
          backgroundColor: "rgb(67, 181, 160)",
          borderRadius: "50px",
          padding: "12px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default RequestForm;

import React from "react";

const NoTickets: React.FC = () => {
  return (
    <div>
      <p className="text-muted">No tickets registered yet.</p>
      <img
        src="/no-data.png"
        alt="No Data"
        style={{ width: "200px", marginTop: "10px" }}
      />
    </div>
  );
};

export default NoTickets;





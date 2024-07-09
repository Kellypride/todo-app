import React, { useState } from "react";
import { GiProgression } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
const Status = ({ onSelect, selected }) => {
  const [selectedStatus, setSelectedStatus] = useState(selected);
  const handleStatusChange = (selectedValue) => {
    setSelectedStatus(selectedValue);
    onSelect(selectedValue);
  };
  return (
    <div style={cardField}>
      <div
        style={{ backgroundColor: "#403E3E" }}
        className="p-2 flex flex-col min-w-max  gap-2 rounded-md"
      >
        <button
          className={`${
            selectedStatus === "pending" &&
            "bg-cyan-200 text-black rounded-sm p-1"
          } flex gap-2 content-center items-center`}
          onClick={() => handleStatusChange("pending")}
        >
          <FaExclamation />
          <p>Pending</p>
        </button>
        <button
          className={`${
            selectedStatus === "completed" &&
            "bg-cyan-100 text-black rounded-sm p-1"
          } flex gap-2 content-center items-center`}
          onClick={() => handleStatusChange("completed")}
        >
          <FaCheck />
          <p>Completed</p>
        </button>
        <button
          className={`${
            selectedStatus === "inProgress" &&
            "bg-cyan-200 text-black rounded-sm p-1"
          } flex gap-2 content-center items-center`}
          onClick={() => handleStatusChange("inProgress")}
        >
          <GiProgression />
          <p>In Progress</p>
        </button>
      </div>
    </div>
  );
};

export default Status;

const cardField = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "flex-start",
  padding: "0.25rem",
  borderRadius: "1rem",
  height: "fit-content",
  width: "fit-content",
  color: "white",
  fontSize: 14,
  fontFamily: "Roboto",
  opacity: "100%",
};

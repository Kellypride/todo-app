import React, { useState } from "react";
import { GiProgression } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import Status from "./status";
import db from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Card = (props) => {
  const [showPopupMenu, setShowPopupMenu] = useState(false); // State for status visibility

  const [selectedStatus, setSelectedStatus] = useState(props.status); //state for update status

  const priorityColorMap = {
    high: "#fff",
    medium: "#7dd3fc",
    low: "#FFC107",
  };

  const statusIconMap = {
    completed: <FaCheck />,
    pending: <FaExclamation />,
    inProgress: <GiProgression />,
  };

  const togglePopupMenu = () => {
    setShowPopupMenu(!showPopupMenu);
  };

  const handleStatusChange = async (newStatus) => {
    setSelectedStatus(newStatus);

    // Update status in Firestore
    try {
      const docRef = doc(db, "tasks/" + props.id);
      await updateDoc(docRef, {
        status: newStatus,
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div style={cardField} className={props.className}>
      <div className="flex justify-between items-center w-full ">
        <span
          style={{
            backgroundColor: "#403E3E",
            color: priorityColorMap[props.priority],
          }}
          className={`rounded-full py-2 px-4 text-center`}
        >
          {props.priority}
        </span>
        <div className="relative max-w-fit flex flex-col items-end bg-transparent">
          <button
            className="rounded-full p-2"
            style={{
              backgroundColor: "#403E3E",
              color: priorityColorMap[props.priority],
            }}
            onClick={togglePopupMenu}
          >
            {statusIconMap[selectedStatus]}
          </button>
          {showPopupMenu && (
            <div className="absolute top-full z-50">
              <Status onSelect={handleStatusChange} selected={props.status} />
            </div>
          )}
        </div>
      </div>
      <p>{props.taskTitle}</p>
      <div className="flex justify-between items-center w-full  ">
        <div className="flex justify-between gap-2   font-light text-xs">
          <span>
            <IoCalendarNumberOutline />
          </span>
          <span> {props.date} </span>
        </div>
        <div className="flex justify-between gap-2 font-light text-xs">
          <span>
            {" "}
            <LuAlarmClock />{" "}
          </span>
          <span> {props.hours} </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

const cardField = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "flex-start",
  paddingTop: "1rem",
  padding: "1rem ",
  borderRadius: "1rem",
  height: "fit-content",
  width: "100%",
  color: "white",
  fontSize: 14,
  fontFamily: "Roboto",
  backgroundColor: "#313131",
  opacity: "100%",
};

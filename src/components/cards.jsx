import React from "react";
import { GiProgression } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";

const Card = (props) => {
  const priorityColorMap = {
    high: "#fff", // White for high priority
    medium: "#FD7E14", // Orange for medium priority
    low: "#FFC107", // Green for low priority (assuming "in progress")
  };

  const statusIconMap = {
    completed: <FaCheck />, // Checkmark for completed
    pending: <FaExclamation />, // Exclamation for pending
    inProgress: <GiProgression />, // Construction sign for in progress
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
        <span
          className="rounded-full p-2"
          style={{
            backgroundColor: "#403E3E",
            color: priorityColorMap[props.priority],
          }}
        >
          {props.status ? statusIconMap.completed : statusIconMap.pending}
        </span>
      </div>
      <p>{props.taskTitle}</p>
      <div className="flex justify-between items-center w-full  ">
        <div className="flex justify-between gap-2   font-light text-xs">
          <span>
            <IoCalendarNumberOutline />
          </span>
          <span> {props.day} </span>
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

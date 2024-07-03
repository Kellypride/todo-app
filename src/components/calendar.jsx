import React from "react";

const Calendar = (props) => {
  return (
    <div style={calendarField} className={props.className}>
      <span className="font-light">{props.day}</span>
      <span className="font-bold">{props.date}</span>
    </div>
  );
};

export default Calendar;

const calendarField = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "flex-start",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem ",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  borderRadius: "0.25rem",
  height: "fit-content",
  width: "fit-content",
  color: "white",
  fontSize: 12,
  FontFamily: "roboto",
  backgroundColor: "#27272a",
};
const container = {
  backgroundColor: "#a5f3fc",
};

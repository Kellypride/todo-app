import React, { useState } from "react";
import { GiBoltEye } from "react-icons/gi";
import { GoEyeClosed } from "react-icons/go";

const styles = {
  inputField: {
    paddingVertical: 16,
    fontSize: 12,
    width: "100%",
    FontFamily: "roboto",
  },
  container: {
    borderRadius: 16,
    backgroundColor: "#27272a",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const Input = (props) => {
  const [focus, setFocus] = useState(false);
  const [inputType, setInputType] = useState("false");

  const toggleInputType = () => {
    setInputType(!inputType);
  };

  return (
    <div
      style={styles.container}
      className={`flex *:py-4 items-center justify-between px-4 ${
        props.iconPosition === "left"
          ? "flex-row-reverse [&>input]:text-right"
          : "flex-row"
      } ${focus ? "border-2 border-cyan-100" : "border-2 border-transparent"}`}
    >
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.inputField}
        type={inputType ? "text" : "password"}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="focus:outline-none bg-transparent"
        name={props.name}
        value={props.value}
      />
      {props.icon && (
        <button type="button" onClick={toggleInputType}>
          {inputType ? (
            <GiBoltEye color={"#cbd5e1"} /> // Visible password icon
          ) : (
            <GoEyeClosed color={"#cbd5e1"} /> // Closed eye icon
          )}
        </button>
      )}
    </div>
  );
};

export default Input;

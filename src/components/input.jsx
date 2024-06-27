import React, { useState } from "react";

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
  const [focused, setFocus] = useState(false);

  return (
    <div
      style={styles.container}
      className={`flex *:py-4 items-center justify-between px-4 ${
        props.iconPosition === "left"
          ? "flex-row-reverse [&>input]:text-right"
          : "flex-row"
      } ${
        focused ? "border-2 border-cyan-100" : "border-2 border-transparent"
      }`}
    >
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.inputField}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="focus:outline-none bg-transparent"
      />
      {props.icon}
    </div>
  );
};

export default Input;

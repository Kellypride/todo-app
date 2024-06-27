import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button style={btnStyles} className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
    </div>
  )
}

export default Button;

const btnStyles = {
  paddingVertical: 16,
  fontSize: 16,
  fontWeight: 600,
  width: "100%",
  FontFamily: "roboto",
}
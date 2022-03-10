import React from "react";
function InputArea(props) {
  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.enter}
      value={props.value}
    />
  );
}

export default InputArea;

import React from "react";
import "./Button.css";
export const Button = (props) => {
  console.log(props);
  return (
    <button
      style={{
        color: props.fontColor,
        backgroundColor: props.bgColor,
        padding: props.padding,
        borderRadius: props.borderRadius,
        paddingTop: props.paddingLeft,
        paddingBottom: props.paddingLeft,
        paddingLeft: props.paddingRight,
        paddingRight: props.paddingRight,
      }}
    >
      {props.children}
    </button>
  );
};

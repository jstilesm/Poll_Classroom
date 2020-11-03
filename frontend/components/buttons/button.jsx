import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  let className = "button ";
  if (props.blue) {
    className += "button-blue ";
  }
  if (props.white) {
    className += "button-white ";
  }
  if (props.red) {
    className += "button-red ";
  }
  if (props.whiteSpecial) {
    className += "button-white-special ";
  }
  if (props.whiteGrey) {
    className += "button-whitegrey ";
  }
  if (props.medium) {
    className += "button-medium ";
  }
  if (props.large) {
    className += "button-large ";
  }
  if (props.flexed) {
    className += "flexed ";
  }
  if (props.marginRight) {
    className += "margin-right ";
  }
  if (props.centered) {
    className += "centered ";
  }
  if (props.boldLight) {
    className += "bold-light ";
  }
  if (props.nav) {
    className += "nav ";
  }
  if (props.oneThird) {
    className += "one-third ";
  }
  if (props.oneHalf) {
    className += "one-half ";
  }
  if (props.listButton) {
    className += "word-list-button ";
  }

  if (props.to !== undefined) {
    return (
      <Link className={className} {...props}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

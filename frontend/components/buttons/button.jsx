import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = (p) => {
  const props = { ...p };
  let className = "button ";
  if (props.blue) {
    delete props.blue;
    className += "button-blue ";
  }
  if (props.white) {
    delete props.white;
    className += "button-white ";
  }
  if (props.red) {
    delete props.red;
    className += "button-red ";
  }
  if (props.whiteSpecial) {
    delete props.whiteSpecial;
    className += "button-white-special ";
  }
  if (props.whiteGrey) {
    delete props.whiteGrey;
    className += "button-whitegrey ";
  }
  if (props.medium) {
    delete props.medium;
    className += "button-medium ";
  }
  if (props.large) {
    delete props.large;
    className += "button-large ";
  }
  if (props.largeb) {
    delete props.largeb;
    className += "button-largeb ";
  }
  if (props.extraLarge) {
    delete props.extraLarge;
    className += "button-extra-large ";
  }
  if (props.flexed) {
    delete props.flexed;
    className += "flexed ";
  }
  if (props.marginRight) {
    delete props.marginRight;
    className += "margin-right ";
  }
  if (props.centered) {
    delete props.centered;
    className += "centered ";
  }
  if (props.boldLight) {
    delete props.boldLight;
    className += "bold-light ";
  }
  if (props.nav) {
    delete props.nav;
    className += "nav ";
  }
  if (props.oneThird) {
    delete props.oneThird;
    className += "one-third ";
  }
  if (props.oneHalf) {
    delete props.oneHalf;
    className += "one-half ";
  }
  if (props.listButton) {
    delete props.listButton;
    className += "word-list-button ";
  }
  if (props.widePadding) {
    delete props.widePadding;
    className += "wide-padding ";
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

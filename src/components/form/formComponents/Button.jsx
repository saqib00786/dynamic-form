import React from "react";

const Button = ({ label = "", value = "", ...otherProps }) => {
  return (
    <div>
      <button {...otherProps}>{label}</button>
    </div>
  );
};

export default Button;

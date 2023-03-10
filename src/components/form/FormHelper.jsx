import React from "react";
import Button from "./formComponents/Button";

export const inputTypes = {
  text: <input />,
  p: <p></p>,
  button: <Button/>,
  select: <select></select>,
};

export const getInputType = ({ inputType }) => {
  const output = inputTypes[inputType] ? inputTypes[inputType] : <input />;
  return output;
};

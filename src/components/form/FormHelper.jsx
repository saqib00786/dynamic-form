import React from "react";
import Button from "./formComponents/Button";
import SelectInput from "./formComponents/SelectInput";

export const inputTypes = {
  text: <input />,
  p: <p></p>,
  button: <Button/>,
  select: <SelectInput/>
};

export const getInputType = ({ inputType }) => {
  const output = inputTypes[inputType] ? inputTypes[inputType] : <input />;
  return output;
};

import React, { cloneElement } from "react";
import { getInputType } from "./FormHelper";

const CloneComponent = ({ form, ...elementProps }) => {
  const { inputType, ...otherProps } = form;
  const element = getInputType({ inputType });
  const cloneComponent = cloneElement(element, {
    ...elementProps,
    ...otherProps,
  });
  return cloneComponent;
};

export default CloneComponent;

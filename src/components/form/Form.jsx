import React from "react";
import "./Form.css";
import { HelperComponent } from "./Form.Helper";

const Form = ({FormFields}) => {
  return (
    <div className="form">
      {FormFields.map((field, index) => (
        <HelperComponent field={field} />
      ))}
    </div>
  );
};

export default Form;

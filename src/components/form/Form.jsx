import React from "react";
import "./Form.css";
import { HelperComponent } from "./Form.Helper";

const Form = ({ FormFields,handleClick,handleRegister }) => {
  return (
    <div className="form">
      {FormFields.map((field, index) => {
        return <HelperComponent field={field} onClick={field.name === 'login' ? handleClick : handleRegister} />;
      })}
    </div>
  );

  
};

export default Form;

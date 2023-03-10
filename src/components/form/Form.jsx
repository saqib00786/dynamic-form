import React from "react";
import "./Form.css";
import CloneComponent from "./CloneComponent";

const Form = ({
  fields,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  errors,
  setFieldValue,
}) => {
  return (
    <div className="form">
      {fields.map((elementAttribs, index) => {
        let _props = {
          form: elementAttribs,
          onChange: handleChange(elementAttribs.name),
          onBlur: handleBlur(elementAttribs.name),
          value: values[elementAttribs.name],
          setFieldValue: setFieldValue,
        };

        if (elementAttribs?.name == "submit") {
          _props = { ..._props, onClick: handleSubmit };
        }

        return (
          <div className="form-group" key={elementAttribs?.name}>
            <CloneComponent {..._props} />
          </div>
        );
      })}
    </div>
  );
};

export default Form;

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

function getConditionalFields(fields, values) {
  return fields.map(({ condition = null, ...field }) => {
    if (!condition) return field;
    //   const parentFieldName = condition?.fieldName;
    //   let parentFieldValue = values[parentFieldName];
    //   if (condition?.action == "hide") {
    //     parentFieldValue =
    //       typeof parentFieldValue !== "undefined"
    //         ? parentFieldValue
    //         : getDefaultValue(fields, parentFieldName, "defaultIsChecked");

    //     // console.log("🚀 ~ file: FormLoop.tsx ~ line 91 ~ returnfields.map ~ parentFieldValue", field.name, parentFieldValue, JSON.parse(condition?.matchValue))
    //     if (parentFieldValue == JSON.parse(condition?.matchValue)) {
    //       return { ...field, condition, hidden: true };
    //     }
    //   }
    //   return field;
  });
}

export default Form;

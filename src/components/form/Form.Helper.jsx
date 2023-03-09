import React from "react";

export const HelperComponent = ({ field }) => {
  switch (field.inputType) {
    case "input":
      return <input {...field} />;

    case "button":
      return <button {...field}>{field.title}</button>;

    case "text":
      return <p {...field}>{field.title}</p>;

    case "drop-down":
      return (
        <select {...field}>
          {field.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      );

    default:
      return;
  }
};

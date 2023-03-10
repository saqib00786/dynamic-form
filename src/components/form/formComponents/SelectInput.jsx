import React from "react";

const SelectInput = ({
  errors,
  options = [],
  name,
  url = "",
  valueAttribute = "id",
  labelAttribute = "name",
  ...otherProps
}) => {
  return (
    <div>
      <select 
      value={options}
      onChange={(e) => {}} {...otherProps}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;

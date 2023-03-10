import React, { useEffect, useState } from "react";

const SelectInput = ({
  errors,
  options = [],
  name,
  url = "",
  valueAttribute = "id",
  labelAttribute = "name",
  setFieldValue,
  placeholder,
  ...otherProps
}) => {
  console.log("🚀 ~ file: SelectInput.jsx:14 ~ url:", url)
//   const [option, setOptions] = useState(
//     otherProps?.value ? parseInt(otherProps?.value) : otherProps?.value
//   );
//   console.log("🚀 ~ file: SelectInput.jsx:16 ~ option:", option);
  const [filteredList, setFilteredList] = useState(options);

  useEffect(() => {
    if (url) fetchData(url);
    return () => {};
  }, [url]);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data && Array.isArray(data)) {
      let compiledData = data.map((item) => {
        return {
          label: item[labelAttribute],
          value: item[valueAttribute],
        };
      });
      setFilteredList(compiledData);
    }
  };

  const onValChange = (value) => {
    console.log(
      "🚀 ~ file: SelectInput.jsx:38 ~ onValueChange ~ value:",
      value
    );
    // setOptions(value);
    setFieldValue(name, value);
  };

  return (
    <div>
      <select
        // defaultValue={option}
        // value={options}
        
        onChange={(itemValue) => onValChange(itemValue)}
        {...otherProps}
      >
        <option value="" hidden>{placeholder}</option>
        {filteredList.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;

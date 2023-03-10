import React, { useEffect, useState } from "react";

const SelectInput = ({
  errors,
  options = [],
  name,
  url = "",
  valueAttribute = "id",
  labelAttribute = "name",
  ...otherProps
}) => {
  const [option, setOptions] = useState([]);
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

  return (
    <div>
      <select value={options} onChange={(e) => {}} {...otherProps}>
        {filteredList.map((option, index) => {
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

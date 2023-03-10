import React from 'react'

const SelectInput = ({
    errors,
    options=[],
    name,
    url='',
    valueAttribute = 'id',
    labelAttribute = 'name',
    ...otherProps
}) => {
  return (
    <div>
        <select
        
        {...otherProps}
        >

        </select>
    </div>
  )
}

export default SelectInput
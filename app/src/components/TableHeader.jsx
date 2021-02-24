import React from 'react'

function TableHeader(props) {
  const { heading, sortFunc, index } = props
  return (
    <th onClick={() => sortFunc(index)}>
      {heading}
    </th>
  );
}


export default TableHeader;
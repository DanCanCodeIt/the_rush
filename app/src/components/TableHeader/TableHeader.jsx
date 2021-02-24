import React from 'react'


function getHeading(headings, sortFunc) {
  let output = [];
  for (let i=0; i<headings.length; i++) {
    output.push(
      <th onClick={() => sortFunc(i)}>
        {headings[i]}
      </th>
    )
  }
  return output;
}

export function TableHeader(props) {
  const { headings, sortFunc } = props
  return (
    getHeading(headings, sortFunc)
  );
}

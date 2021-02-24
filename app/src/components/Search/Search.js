import React from 'react';
import './style.css';

export function Search(props) {
  const {submitSearchFunc} = props;

  return (
    <div className="form">
      <input type="text" placeholder="name" name="name" id="name"></input>
      <input type="submit" value="search" onClick={submitSearchFunc}></input>
    </div>
  );
}

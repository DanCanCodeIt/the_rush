import React from 'react';

function Paginator(props) {
  const { onChange, nextPageUrl, prevPageUrl, currentPage } = props;

  function incrementPage(e) {
    onChange(currentPage+1);
  }
  function decrementPage(e) {
    onChange(currentPage-1);
  }

  return (
    <>
      { prevPageUrl && <button onClick={decrementPage}>prev</button> }
      <a>Page {currentPage}</a>
      { nextPageUrl && <button onClick={incrementPage}>next</button> }
    </>
  );
}

export default Paginator;
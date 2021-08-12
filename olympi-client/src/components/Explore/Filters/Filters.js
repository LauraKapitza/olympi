import React from 'react'
import "./Filters.css"
function Filters({changeSortBy}) {
  return (
    <div className="FiltersContainer">
      <div className="FiltersTitle">Sort By: </div>
      <div className="FilterBtns">
        <button onClick={() => changeSortBy('desc')}>Most Votes</button>
        <button onClick={() => changeSortBy('asc')}>Less Votes</button>
      </div>
    </div>
  )
}

export default Filters

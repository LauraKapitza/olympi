import React from 'react'
import "./Filters.css"

function Filters() {
  return (
    <div className="FiltersContainer">
      <div className="FiltersTitle">Sort By: </div>
      <div className="FilterBtns">
        <button>Most Votes</button>
        <button>Less Votes</button>
        <button>Most Tagged</button>
        <button>All</button>
      </div>
    </div>
  )
}

export default Filters

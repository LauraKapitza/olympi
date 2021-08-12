import React, { useState } from 'react'
import ExploreBottomNavBar from './ExploreBottomNavBar/ExploreBottomNavBar'
import Filters from './Filters/Filters'
import SearchBar from './SearchBar/SearchBar'
import ExploreVideos from './ExploreVideos/ExploreVideos'

function Explore() {
  const [tab, setTab] = useState('trending')
  const [sortBy, changeSortBy] = useState('desc')
  console.log({ tab })
  return (
    <div>
      <SearchBar changeTab={setTab} tab={tab} />
      <Filters changeSortBy={changeSortBy} />
      <ExploreVideos category={tab} sortBy={sortBy} />
      <ExploreBottomNavBar />
    </div>
  )
}

export default Explore

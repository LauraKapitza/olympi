import React from 'react'
import ExploreBottomNavBar from './ExploreBottomNavBar/ExploreBottomNavBar'
import Filters from './Filters/Filters'
import SearchBar from './SearchBar/SearchBar'
import ExploreVideos from './ExploreVideos/ExploreVideos'

function Fails() {
  return (
    <div>
    <SearchBar/>
    <Filters/>
    <ExploreVideos category={"fail"} />
    <ExploreBottomNavBar/>
  </div>
  )
}

export default Fails

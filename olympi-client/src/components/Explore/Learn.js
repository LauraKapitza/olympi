import React from 'react'
import ExploreBottomNavBar from './ExploreBottomNavBar/ExploreBottomNavBar'
import Filters from './Filters/Filters'
import SearchBar from './SearchBar/SearchBar'
import ExploreVideos from './ExploreVideos/ExploreVideos'

function Learn() {
  return (
    <div>
    <SearchBar/>
    <Filters/>
    <ExploreVideos category={"learn"} />
    <ExploreBottomNavBar/>
  </div>
  )
}
export default Learn

import React from 'react'
import ExploreBottomNavBar from './ExploreBottomNavBar/ExploreBottomNavBar'
import Filters from './Filters/Filters'
import SearchBar from './SearchBar/SearchBar'
import ExploreVideos from './ExploreVideos/ExploreVideos'

function Trending() {
  return (
    <div>
      <SearchBar/>
      <Filters/>
      <ExploreVideos/>
      <ExploreBottomNavBar/>

    </div>
  )
}

export default Trending

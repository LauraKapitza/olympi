import React from 'react'
import "./SearchBar.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


function SearchBar() {
  return (
    <div className="SearchBarContainer">

<div className="ExploreTitle">Explore <div className="ExploreIcons"><img src="/assets/icons/notificationsicon.svg" alt=""></img><img src="/assets/icons/addicon.svg" alt=""></img></div></div>
<div className="SearchBoxContainer"><SearchRoundedIcon/>Search...</div>
<div className="PagesContainer">
<div className="Fails">Fails</div>
<div className="Trending">Trending</div>
<div className="Learn">Learn</div>
</div>

    </div>
  )
}

export default SearchBar

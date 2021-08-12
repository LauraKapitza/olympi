import React from 'react'
import "./SearchBar.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


function SearchBar({ changeTab, tab }) {
  return (
    <div className="SearchBarContainer">
      <div className="ExploreTitle">Explore <div className="ExploreIcons"><img src="/assets/icons/notificationsicon.svg" alt=""></img><img src="/assets/icons/addicon.svg" alt=""></img></div></div>
      <div className="SearchBoxContainer"><SearchRoundedIcon />Search...</div>
      <div className="PagesContainer">
        <div className={`Fails ${tab === 'fails' ? 'selected-tab' : 'tab-border'}`} onClick={() => changeTab("fails")}>Fails</div>
        <div className={`Trending ${tab === 'trending' ? 'selected-tab' : 'tab-border'}`} onClick={() => changeTab("trending")}>Trending</div>
        <div className={`Learn ${tab === 'learn' ? 'selected-tab' : 'tab-border'}`} onClick={() => changeTab("learn")}>Learn</div>
      </div>

    </div>
  )
}

export default SearchBar

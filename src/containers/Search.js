import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { showPlaceCategories } from '../recoil/atom.js'
import { ReactComponent as IconSearch } from '../asset/svg/icon-search.svg'
import '../styles/search.css'

export const Search = () => {
  const [search, setSearch] = useState('')
  const setShowPlace = useSetRecoilState(showPlaceCategories)
  const submitSearch = () => {
    setShowPlace((prevState) => ({
      ...prevState,
      isSearch: true,
      valueSearch: search
    }))
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search name..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}></input>
      <div className="icon-search" onClick={() => submitSearch()}>
        <IconSearch />
      </div>
    </div>
  )
}
